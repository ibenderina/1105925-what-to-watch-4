import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmInfoOverview from "@components/film-info-details/film-info-details.connect";
import {testFilmStore} from "@utils/test-data";
import configureStore from "redux-mock-store";
import NameSpace from "@reducer/name-space";
import {Provider} from "react-redux";

it(`Should FilmInfoOverview render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <FilmInfoOverview filmId={`1`}/>
      </Provider>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
