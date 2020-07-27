import {reducer, AuthorizationStatus, Actions, ActionType, Operations} from "./user";
import {rawUserAccount, testUserAccount, testUserEmptyStore} from "@utils/test-data";
import {extend} from "@utils/utils";
import {createAPI} from "@api/api";
import {APIEndpoints, ErrorMessages} from "@consts";
import MockAdapter from "axios-mock-adapter";

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(testUserEmptyStore);
});

it(`Require Authorization action is correct`, () => {
  const result = extend(testUserEmptyStore, {
    authorizationStatus: AuthorizationStatus.AUTH,
    userAccount: testUserAccount
  });

  expect(reducer(testUserEmptyStore, Actions.requireAuthorization(AuthorizationStatus.AUTH, testUserAccount)))
    .toEqual(result);
});

it(`Set Authorization Error action is correct`, () => {
  const result = extend(testUserEmptyStore, {
    authorizationErrorMessage: ErrorMessages.INVALID_USER_DATA,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(reducer(testUserEmptyStore, Actions.setAuthorizationError(ErrorMessages.INVALID_USER_DATA)))
    .toEqual(result);
});

it(`checkAuth option is correct`, function () {
  const dispatch = jest.fn();
  const filmsLoader = Operations.checkAuth();

  apiMock
    .onGet(APIEndpoints.LOGIN)
    .reply(200, rawUserAccount);

  return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: {status: AuthorizationStatus.IN_PROGRESS, userAccount: undefined},
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: {
          status: AuthorizationStatus.AUTH,
          userAccount: testUserAccount,
        },
      });
    });
});

it(`login option is correct`, function () {
  const dispatch = jest.fn();
  const filmsLoader = Operations.checkAuth();

  apiMock
    .onPost(APIEndpoints.LOGIN, {email: testUserAccount.email, password: `test`})
    .reply(200, rawUserAccount);

  return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: {status: AuthorizationStatus.IN_PROGRESS, userAccount: undefined},
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: {
          status: AuthorizationStatus.AUTH,
          userAccount: testUserAccount,
        },
      });
    });
});
