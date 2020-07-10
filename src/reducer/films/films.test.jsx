import {reducer, Actions as FilmsActions, Operations, ActionType} from "./films";
import {ALL_GENRES} from "consts.jsx";
import {extend} from "@utils";
import {rawTestFilms, testFilms} from "@utils/test-data";
import {Film} from "@api/adapter";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "@api/api";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  const initialState = {
    currentGenre: ALL_GENRES,
    genres: [],
    films: [],
    isMoreFilms: true,
    promoFilm: new Film({}),
    showedFilmsCount: 0,
  };
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Actions is correct`, () => {
  const initialState = {
    currentGenre: ALL_GENRES,
    genres: [... new Set(testFilms.map((f) => f.genre))],
    films: testFilms,
    isMoreFilms: true,
    promoFilm: testFilms[0],
    showedFilmsCount: 8,
  };

  const result = extend(initialState, {
    currentGenre: testFilms[0].genre,
  });

  expect(reducer(initialState, FilmsActions.setCurrentGenre(testFilms[0].genre))).toEqual(result);
});


it(`Should make a correct API call to /films`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmsLoader = Operations.loadFilms();

  apiMock
    .onGet(`/films`)
    .reply(200, rawTestFilms);

  return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: testFilms,
      });
    });
});

it(`Should make a correct API call to /films/promo`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmLoader = Operations.loadPromoFilm();

  apiMock
    .onGet(`/films/promo`)
    .reply(200, rawTestFilms[0]);

  return filmLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_PROMO_FILM,
        payload: testFilms[0],
      });
    });
});
