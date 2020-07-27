import {ALL_GENRES, APIEndpoints, CountLimit} from "@consts";
import {extend} from "@utils/utils";
import {Film} from "@api/adapter";

const ActionType = {
  SET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  GET_FILM_BY_ID: `GET_FILM_BY_ID`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  SHOW_MORE: `SHOW_MORE`,
  TOGGLE_IF_FAVORITE: `TOGGLE_IF_FAVORITE`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
};

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [],
  films: [],
  favoriteFilms: [],
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
  },
  loadFavoriteFilms: (filmId) => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: filmId,
    };
  }
};

const Operations = {
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(APIEndpoints.PROMO_FILM)
      .then((response) => {
        dispatch(
            Actions.loadPromoFilm(new Film(response.data))
        );
      });
  },

  loadFilms: () => (dispatch, getState, api) => {
    return api.get(APIEndpoints.FILMS)
      .then((response) => {
        dispatch(
            Actions.loadFilms(
                Film.parse(response.data)
            )
        );
      })
      .catch((err) => {
        throw err;
      });
  },

  toggleIsFavorite: (filmId, status) => (dispatch, getState, api) => {
    return api.post(`${APIEndpoints.FAVORITE}/${filmId}/${+status}`)
      .then((response) => {
        dispatch(Actions.toggleIsFavorite(new Film(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(APIEndpoints.FAVORITE)
      .then((response) => {
        dispatch(Actions.loadFavoriteFilms(Film.parse(response.data)));
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

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload || [],
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
      const film = state.films.find((item) => item.id === action.payload.id);
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
