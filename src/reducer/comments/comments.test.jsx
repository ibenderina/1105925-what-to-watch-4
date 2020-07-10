import {reducer, Actions, Operations, ActionType} from "@reducer/comments/comments";
import {extend} from "@utils/utils";
import {rawTestComments, testComments} from "@utils/test-data";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "@api/api";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  const initialState = {};
  expect(reducer(void 0, {})).toEqual(initialState);
});

it(`Actions is correct`, () => {
  const initialState = {};
  const result = extend(initialState, {
    1: testComments,
  });

  expect(reducer(initialState, Actions.loadFilmComments(1, testComments))).toEqual(result);
});


it(`Should make a correct API call to /comments`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const commentsLoader = Operations.loadFilmComments(1);

  apiMock
    .onGet(`/comments/1`)
    .reply(200, rawTestComments);

  return commentsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILM_COMMENTS,
        payload: {1: []},
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_FILM_COMMENTS,
        payload: {1: testComments},
      });
    });
});
