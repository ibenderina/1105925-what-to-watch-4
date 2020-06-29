import {reducer, setCurrentGenre} from "@reducer";
import mockFilms from "../mocks/films";
import {ALL_GENRES} from "@consts";

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [...(new Set(mockFilms.map((item) => {
    return item.genre;
  })))].slice(0, 9),
  films: mockFilms,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Actions is correct`, () => {
  const result = {
    currentGenre: mockFilms[0].genre,
    films: mockFilms.filter((film) => {
      return film.genre === mockFilms[0].genre;
    }),
    genres: [...(new Set(mockFilms.map((item) => {
      return item.genre;
    })))].slice(0, 9),
  };
  expect(reducer(initialState, setCurrentGenre(mockFilms[0].genre))).toEqual(result);
});


