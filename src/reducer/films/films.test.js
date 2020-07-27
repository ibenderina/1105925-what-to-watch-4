import {reducer, Actions as FilmsActions, Operations, ActionType} from "@reducer/films/films";
import {extend} from "@utils/utils";
import {rawTestFilms, testEmptyFilmStore, testFilms, testFilmStore} from "@utils/test-data";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "@api/api";
import {APIEndpoints} from "@consts";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(testEmptyFilmStore);
});

it(`Actions is correct`, () => {
  const result = extend(testFilmStore, {
    currentGenre: testFilms[0].genre,
  });

  expect(reducer(testFilmStore, FilmsActions.setCurrentGenre(testFilms[0].genre))).toEqual(result);
});


it(`Should make a correct API call to /films`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmsLoader = Operations.loadFilms();

  apiMock
    .onGet(APIEndpoints.FILMS)
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

it(`Should make a correct API call to /favorite`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmsLoader = Operations.loadFavoriteFilms();

  apiMock
    .onGet(APIEndpoints.FAVORITE)
    .reply(200, rawTestFilms);

  return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITE_FILMS,
        payload: testFilms,
      });
    });
});

it(`Should make a correct API call to /films/promo`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmLoader = Operations.loadPromoFilm();

  apiMock
    .onGet(APIEndpoints.PROMO_FILM)
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
