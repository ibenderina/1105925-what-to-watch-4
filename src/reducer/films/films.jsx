import {ALL_GENRES, CountLimit} from "@consts";
import {extend} from "@utils/utils";
import {parseFilms, Film} from "@api/adapter";

const ActionType = {
  SET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  GET_FILM_BY_ID: `GET_FILM_BY_ID`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  SHOW_MORE: `SHOW_MORE`,
  TOGGLE_IF_FAVORITE: `TOGGLE_IF_FAVORITE`,
};

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [],
  films: [],
  promoFilm: new Film({}),
  showedFilmsCount: 0,
};

const Actions = {
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    };
  },
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  showMore: () => {
    return {
      type: ActionType.SHOW_MORE,
    };
  },
  setCurrentGenre: (genre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: genre,
    };
  },
  toggleIsFavorite: (filmId) => {
    return {
      type: ActionType.TOGGLE_IF_FAVORITE,
      payload: filmId,
    };
  }
};

const Operations = {
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((film) => {
        dispatch(
            Actions.loadPromoFilm(new Film(film.data))
        );
      });
  },
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((films) => {
        dispatch(
            Actions.loadFilms(
                parseFilms(films.data)
            )
        );
      })
      .catch((err) => {
        throw err;
      });
  },
  toggleIsFavorite: (filmId, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${filmId}/${+status}`)
      .then((response) => {
        dispatch(Actions.toggleIsFavorite(new Film(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
        showedFilmsCount: CountLimit.MAX_FILMS,
      });

    case ActionType.LOAD_FILMS:
      return extend(state, {
        showedFilmsCount: CountLimit.MAX_FILMS,
        films: action.payload,
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });

    case ActionType.SHOW_MORE:
      const showedFilmsCount = state.showedFilmsCount + CountLimit.MAX_FILMS;
      return extend(state, {
        showedFilmsCount,
      });

    case ActionType.TOGGLE_IF_FAVORITE:
      const film = state.films.find((f) => f.id === action.payload.id);
      film.isFavorite = action.payload.isFavorite;
      const promoFilm = state.promoFilm.id === film.id ? action.payload : state.promoFilm;
      return extend(state, {
        films: state.films,
        promoFilm,
      });
  }

  return state;
};

export {reducer, ActionType, initialState, Actions, Operations};
