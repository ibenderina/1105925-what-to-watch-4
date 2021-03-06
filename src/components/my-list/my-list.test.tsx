import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {testFilms, testFilmStore, testUserStore} from "@utils/test-data";
import NameSpace from "@reducer/name-space";
import {MemoryRouter} from 'react-router-dom';
import MyList from "@components/my-list/my-list";

const mockStore = configureStore([]);

it(`Should My List render correctly`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
    [NameSpace.USER]: testUserStore,
  });

  const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <MyList films={testFilms} loadFavoriteFilms={() => ({})}/>
        </Provider>
      </MemoryRouter>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
