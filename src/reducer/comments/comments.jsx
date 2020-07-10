import {extend} from "@utils/utils";
import {parseComments} from "@api/adapter";


const ActionType = {
  LOAD_FILM_COMMENTS: `LOAD_FILM_COMMENTS`,
};

const initialState = {
};

const Actions = {
  loadFilmComments: (filmId, comments) => {
    return {
      type: ActionType.LOAD_FILM_COMMENTS,
      payload: {[filmId]: comments},
    };
  },
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_COMMENTS:
      return extend(state, action.payload);

    default:
      return state;
  }
};

export {reducer, ActionType, initialState, Actions, Operations};
