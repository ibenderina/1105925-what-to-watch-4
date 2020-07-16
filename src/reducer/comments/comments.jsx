import {extend} from "@utils/utils";
import {parseComments} from "@api/adapter";
import {SuccessMessages, TransferStates} from "@consts";


const ActionType = {
  LOAD_FILM_COMMENTS: `LOAD_FILM_COMMENTS`,
  ADD_COMMENT: `ADD_COMMENT`,
};

const initialState = {
  addStatusMessage: ``,
  addStatus: TransferStates.SUCCESS,
};


const Actions = {
  loadFilmComments: (filmId, comments) => {
    return {
      type: ActionType.LOAD_FILM_COMMENTS,
      payload: {[filmId]: comments},
    };
  },
  addComment: (status, statusMessage) => {
    return {
      type: ActionType.ADD_COMMENT,
      payload: {status, statusMessage}
    };
  },
  // resetAddCommentState
};

const Operations = {
  loadFilmComments: (filmId) => (dispatch, getState, api) => {
    dispatch(Actions.loadFilmComments(filmId, []));
    return api.get(`/comments/${filmId}`)
      .then((comments) => {
        dispatch(
            Actions.loadFilmComments(
                filmId,
                parseComments(comments.data || [])
            )
        );
      })
      .catch((err) => {
        throw err;
      });
  },

  addComment: (filmId, rating, comment) => (dispatch, getState, api) => {
    dispatch(Actions.addComment(TransferStates.IN_PROGRESS, ``));
    return api.post(`/comments/${filmId}`, {rating, comment})
      .then(() => {
        dispatch(Actions.addComment(TransferStates.SUCCESS, SuccessMessages.ADD_COMMENT));
      })
      .catch((err) => {
        const {response} = err;
        if (response) {
          dispatch(Actions.addComment(TransferStates.ERROR, response.data.error));
        }
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_COMMENTS:
      return extend(state, action.payload);

    case ActionType.ADD_COMMENT:
      return extend(state, {
        addStatusMessage: action.payload.statusMessage,
        addStatus: action.payload.status,
      });

    default:
      return state;
  }
};

export {reducer, ActionType, initialState, Actions, Operations};
