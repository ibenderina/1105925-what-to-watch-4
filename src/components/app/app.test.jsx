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

  let tree;
  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <App checkAuth={() => {}} loadFilms={() => {}} loadPromoFilm={() => {}}/>
        </Provider>);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
