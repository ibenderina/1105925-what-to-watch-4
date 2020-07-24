import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import NameSpace from "@reducer/name-space";
import {testUserStore} from "@utils/test-data";
import {Provider} from "react-redux";
import SignIn from "@components/sign-in/sign-in.connect";
import {MemoryRouter} from "react-router-dom";

it(`Should SignIn render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.USER]: testUserStore
  });
  const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <SignIn/>
        </Provider>
      </MemoryRouter>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
