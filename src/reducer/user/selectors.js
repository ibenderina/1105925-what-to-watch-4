import NameSpace from "@reducer/name-space";
import {AuthorizationStatus} from "@reducer/user/user";

export const getAuthState = (state) => {
  return state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH;
};

export const getUserAccount = (state) => {
  return state[NameSpace.USER].userAccount;
};


export const getErrorMessage = (state) => {
  return state[NameSpace.USER].authorizationErrorMessage;
};
