import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmInfoDetails from "@components/film-info-details/film-info-details.connect";
import configureStore from "redux-mock-store";
import {testFilmStore} from "@utils/test-data";
import NameSpace from "@reducer/name-space";
import {Provider} from "react-redux";

it(`Should FilmInfoDetails render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
  });
  const tree = renderer.create(
      <Provider store={store}>
        <FilmInfoDetails filmId={`1`}/>
      </Provider>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
