import * as React from "react";
import * as renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import AddReview from "@components/add-review/add-review.connect";
import NameSpace from "@reducer/name-space";
import {testCommentsStore, testUserEmptyStore, testUserStore} from "@utils/test-data";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PrivateRoute from "@components/private-route/private-route.connect";
import {PageRoute} from "@consts";

it(`Should AddReview render correctly if user logged`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.COMMENTS]: testCommentsStore,
    [NameSpace.USER]: testUserStore
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${PageRoute.REVIEW}/1`]}>
          <PrivateRoute exact path={`${PageRoute.REVIEW}/1`}>
            <AddReview/>
          </PrivateRoute>
        </MemoryRouter>
      </Provider>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it(`Should AddReview render correctly if user NOT logged`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.COMMENTS]: testCommentsStore,
    [NameSpace.USER]: testUserEmptyStore
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${PageRoute.REVIEW}/1`]}>
          <PrivateRoute exact path={`${PageRoute.REVIEW}/1`}>
            <AddReview/>
          </PrivateRoute>
        </MemoryRouter>
      </Provider>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
