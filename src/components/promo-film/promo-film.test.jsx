import PromoFilm from "@components/promo-film/promo-film";
import {testFilms, testFilmStore, testUserStore} from "@utils/test-data";
import {Provider} from "react-redux";
import NameSpace from "@reducer/name-space";
import configureStore from "redux-mock-store";

it(`Should PromoFilm render correctly`, () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    [NameSpace.FILMS]: testFilmStore,
    [NameSpace.USER]: testUserStore
  });
  let tree;

  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <PromoFilm
            film={testFilms[0]}
          />
        </Provider>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
