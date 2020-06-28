import {reducer, setCurrentGenre} from "@reducer";
import mockFilms from "../mocks/films";
import {ALL_GENRES, CountLimit} from "@consts";
import {extend} from "../utils/utils";

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [...(new Set(mockFilms.map((item) => {
    return item.genre;
  })))].slice(0, CountLimit.MAX_GENRES),
  films: mockFilms.slice(0, CountLimit.MAX_FILMS),
  isMoreFilms: true,
  promoFilm: mockFilms[0]
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Actions is correct`, () => {
  const result = extend(initialState, {
    currentGenre: mockFilms[0].genre,
    films: [],
    isMoreFilms: true,
  });
  expect(reducer(initialState, setCurrentGenre(mockFilms[0].genre))).toEqual(result);
});


