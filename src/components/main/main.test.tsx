import * as React from "react";
import * as renderer from "react-test-renderer";
import Main from "@components/main/main.connect";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {testFilmStore, testUserStore} from "@utils/test-data";
import NameSpace from "@reducer/name-space";
import {MemoryRouter} from 'react-router-dom';

const mockStore = configureStore([]);

it(`Should Main render correctly`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
    [NameSpace.USER]: testUserStore
  });

  const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Main match={{params: {id: null}}} history={{goBack: () => {}, push: () => {}}}/>
        </Provider>
      </MemoryRouter>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
