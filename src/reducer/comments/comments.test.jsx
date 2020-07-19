import {reducer, Actions, Operations, ActionType} from "@reducer/comments/comments";
import {rawTestComments, testComments, testCommentsStore, testEmptyCommentsStore} from "@utils/test-data";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "@api/api";
import {APIEndpoints, TransferStates} from "@consts";
import {extend} from "@utils/utils";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual(testEmptyCommentsStore);
});

it(`Actions is correct`, () => {
  expect(reducer(testEmptyCommentsStore, Actions.loadFilmComments(1, testComments)))
    .toEqual(testCommentsStore);

  const resultStatus = TransferStates.SUCCESS;
  const resultMessage = `Comment was added!`;
  const resultStore = extend(testEmptyCommentsStore, {
    addStatusMessage: resultMessage,
    addStatus: resultStatus,
  });

  expect(reducer(testEmptyCommentsStore, Actions.addComment(resultStatus, resultMessage)))
    .toEqual(resultStore);
});


it(`Should make a correct API GET call to /comments`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const commentsLoader = Operations.loadFilmComments(1);

  apiMock
    .onGet(`${APIEndpoints.COMMENTS}/1`)
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


it(`Should make a correct API POST call to /comments/:id`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const commentsLoader = Operations.addComment(1, 5, `test comment`);

  apiMock
    .onPost(`${APIEndpoints.COMMENTS}/1`, {rating: 5, comment: `test comment`})
    .reply(200, rawTestComments);

  return commentsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.ADD_COMMENT,
        payload: {
          status: TransferStates.IN_PROGRESS,
          statusMessage: ``,
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.ADD_COMMENT,
        payload: {
          status: TransferStates.SUCCESS,
          statusMessage: `Comment was added!`
        },
      });
    });
});
