import {ALL_GENRES, CountLimit} from "@consts";
import {extend} from "@utils";
import {parseFilms, Film} from "@api/adapter";

const ActionType = {
  SET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  GET_FILM_BY_ID: `GET_FILM_BY_ID`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  SHOW_MORE: `SHOW_MORE`,
};

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [],
  films: [],
  isMoreFilms: true,
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
      currentGenre: genre,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.currentGenre,
        showedFilmsCount: CountLimit.MAX_FILMS,
      });

    case ActionType.LOAD_FILMS:
      return extend(state, {
        showedFilmsCount: CountLimit.MAX_FILMS,
        films: action.payload,
        isMoreFilms: action.payload.length >= CountLimit.MAX_FILMS
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });

    case ActionType.SHOW_MORE:
      const showedFilmsCount = state.showedFilmsCount * 2;
      return extend(state, {
        showedFilmsCount,
        isMoreFilms: state.films.length >= showedFilmsCount
      });

    case ActionType.GET_FILM_BY_ID:
      return extend(state, {
        films: action.payload,
        promoFilm: action.payload[0],
        isMoreFilms: action.payload.length >= CountLimit.MAX_FILMS
      });

    default:
      return state;
  }
};

export {reducer, ActionType, initialState, Actions, Operations};
