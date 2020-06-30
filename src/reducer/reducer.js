import mockFilms from "../mocks/films.js";
import {ALL_GENRES, CountLimit} from "@consts";
import {extend} from "@utils";

const ActionType = {
  SET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
};

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [...(new Set(mockFilms.map((item) => {
    return item.genre;
  })))].slice(0, CountLimit.MAX_GENRES),
  films: mockFilms.slice(0, CountLimit.MAX_FILMS),
  isMoreFilms: true,
  promoFilm: mockFilms[0]
};

const setCurrentGenre = (genre) => {
  return {
    type: ActionType.SET_CURRENT_GENRE,
    currentGenre: genre,
  };
};

const setFilms = (filmsList) => {
  return {
    type: ActionType.LOAD_FILMS,
    films: filmsList,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.currentGenre,
        isMoreFilms: true,
        films: [],
      });

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: state.films.concat(action.films.slice(0, CountLimit.MAX_FILMS)),
        isMoreFilms: action.films.length === CountLimit.MAX_FILMS
      });

    default:
      return state;
  }
};

export {reducer, ActionType, setCurrentGenre, initialState, setFilms};
