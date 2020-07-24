import * as React from "react";
import * as renderer from "react-test-renderer";
import App from "@components/app/app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {testFilmStore, testUserStore} from "@utils/test-data";
import NameSpace from "@reducer/name-space";

const mockStore = configureStore();

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
    [NameSpace.USER]: testUserStore
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App init={() => {}}/>
      </Provider>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
