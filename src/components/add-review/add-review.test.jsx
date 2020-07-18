import {MemoryRouter} from "react-router-dom";
import AddReview from "@components/add-review/add-review.connect";
import NameSpace from "@reducer/name-space";
import {testCommentsStore, testUserEmptyStore, testUserStore} from "@utils/test-data";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PrivateRoute from "@components/private-route/private-route.connect";


it(`Should AddReview render correctly if user logged`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.COMMENTS]: testCommentsStore,
    [NameSpace.USER]: testUserStore
  });

  let tree;

  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/review/1`]}>
            <PrivateRoute exact path="/review/1">
              <AddReview/>
            </PrivateRoute>
          </MemoryRouter>
        </Provider>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});


it(`Should AddReview render correctly if user NOT logged`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.COMMENTS]: testCommentsStore,
    [NameSpace.USER]: testUserEmptyStore
  });

  let tree;

  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <MemoryRouter initialEntries={[`/review/1`]}>
            <PrivateRoute exact path="/review/1">
              <AddReview/>
            </PrivateRoute>
          </MemoryRouter>
        </Provider>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
