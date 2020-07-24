import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmInfo from "@components/film-info/film-info.connect";
import {testCommentsStore, testFilmStore, testUserStore} from "@utils/test-data";
import {MemoryRouter} from "react-router-dom";
import {Tab} from "@consts";
import configureStore from "redux-mock-store";
import NameSpace from "@reducer/name-space";
import {Provider} from "react-redux";

it(`Should FilmInfo render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
    [NameSpace.COMMENTS]: testCommentsStore,
    [NameSpace.USER]: testUserStore
  });

  const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <FilmInfo
            activeTab={Tab.OVERVIEW}
            filmId={`1`}
            setActiveTab={() => {}}>
            test
          </FilmInfo>
        </Provider>
      </MemoryRouter>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
