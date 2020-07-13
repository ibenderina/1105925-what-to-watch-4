import NameSpace from "@reducer/name-space.jsx";
import {TransferStates} from "@consts";

export const getFilmComments = (state, filmId) => {
  return state[NameSpace.COMMENTS][filmId];
};

export const addCommentInProgress = (state) => {
  return state[NameSpace.COMMENTS].addStatus === TransferStates.IN_PROGRESS;
};

export const addCommentSuccess = (state) => {
  return state[NameSpace.COMMENTS].addStatus === TransferStates.SUCCESS;
};

export const getErrorMessage = (state) => {
  return state[NameSpace.COMMENTS].addStatusMessage;
};
