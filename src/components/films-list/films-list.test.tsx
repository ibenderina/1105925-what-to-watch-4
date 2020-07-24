import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmsList from "@components/films-list/films-list";
import {testFilms, testFilmStore} from "@utils/test-data";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "@reducer/name-space";

it(`Should FilmsList render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
  });

  const tree = renderer.create(
        <MemoryRouter>
          <Provider store={store}>
            <FilmsList films={testFilms}/>
          </Provider>
        </MemoryRouter>
    );
  expect(tree.toJSON()).toMatchSnapshot();
});
