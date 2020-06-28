import mockFilms from "../mocks/films.js";
import {ALL_GENRES} from "@consts";

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [...(new Set(mockFilms.map((item) => {
    return item.genre;
  })))].slice(0, 9),
  films: mockFilms,
};

const ActionType = {
  GET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  GET_ALL_GENRES: `GET_ALL_GENRES`,
  GET_CURRENT_FILMS: `GET_CURRENTS_FILMS`,
};

const setCurrentGenre = (genre) => {
  const films = genre === ALL_GENRES ? mockFilms : mockFilms.filter((film) => {
    return film.genre === genre;
  });
  return {
    type: ActionType.GET_CURRENT_GENRE,
    currentGenre: genre,
    films: films
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CURRENT_GENRE:
      return {
        ...state,
        currentGenre: action.currentGenre,
        films: action.films
      };

    case ActionType.GET_ALL_GENRES:
      return {
        ...state,
        genres: action.genres
      };

    case ActionType.GET_CURRENT_FILMS:
      return {
        ...state,
        films: state.films.filter((film) => {
          return film.genre === state.currentGenre;
        })
      };

    default:
      return state;
  }
};


export {reducer, ActionType, setCurrentGenre, initialState};
