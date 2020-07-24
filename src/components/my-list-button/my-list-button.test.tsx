import * as React from "react";
import * as renderer from "react-test-renderer";
import NameSpace from "@reducer/name-space";
import {testFilmStore} from "@utils/test-data";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import MyListButton from "@components/my-list-button/mi-list-button.connect";


it(`Should My List button render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MyListButton filmId={1} isFavorite={true} toggleFavorite={() => {}}/>
      </Provider>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
