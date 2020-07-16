import {extend, isValidEmail, isValidPassword} from "@utils/utils";
import {ErrorMessages} from "@consts";
import {UserAccount} from "@api/adapter";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  IN_PROGRESS: `IN_PROGRESS`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.IN_PROGRESS,
  authorizationErrorMessage: ``,
  userAccount: new UserAccount({})
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTHORIZATION_ERROR: `SET_AUTHORIZATION_ERROR`,
  LOGOUT: `LOGOUT`
};

const Actions = {
  requireAuthorization: (status, userAccount) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {status, userAccount},
    };
  },
  setAuthorizationError: (errorMessage) => {
    return {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: errorMessage,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload.status,
        userAccount: action.payload.userAccount || state.userAccount
      });

    case ActionType.SET_AUTHORIZATION_ERROR:
      return extend(state, {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationErrorMessage: action.payload,
      });
  }

  return state;
};

const Operations = {
  checkAuth: () => (dispatch, getState, api) => {
    dispatch(Actions.requireAuthorization(
        AuthorizationStatus.IN_PROGRESS
    ));
    return api.get(`/login`)
      .then((response) => {
        const userAccount = UserAccount.parse(response.data);
        if (userAccount) {
          return dispatch(Actions.requireAuthorization(
              AuthorizationStatus.AUTH,
              userAccount
          ));
        }
        return dispatch(Actions.setAuthorizationError(ErrorMessages.INVALID_USER_DATA));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    const isInvalid = (
      (!isValidEmail(authData.email) && ErrorMessages.EMAIL_INVALID) ||
      (!isValidPassword(authData.password) && ErrorMessages.PASSWORD_INVALID)
    );
    if (isInvalid) {
      dispatch(Actions.setAuthorizationError(isInvalid));
      return () => {};
    }
    dispatch(Actions.requireAuthorization(
        AuthorizationStatus.IN_PROGRESS
    ));
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        const userAccount = UserAccount.parse(response.data);
        if (userAccount) {
          return dispatch(Actions.requireAuthorization(
              AuthorizationStatus.AUTH,
              userAccount
          ));
        }
        return dispatch(Actions.setAuthorizationError(ErrorMessages.INVALID_USER_DATA));
      }).catch((err) => {
        const {response} = err;
        if (response) {
          dispatch(Actions.setAuthorizationError(response.data.error));
        }
      });
  },
};


export {
  Actions,
  ActionType,
  AuthorizationStatus,
  Operations,
  reducer,
};
