import App from "@components/app/app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {ALL_GENRES} from "@consts";
import {testFilms} from "@utils/test-data";
import NameSpace from "@reducer/name-space";


const mockStore = configureStore();

const initialState = {
  currentGenre: ALL_GENRES,
  genres: [...new Set(testFilms.map((f) => f.genre))],
  films: testFilms,
  isMoreFilms: true,
  promoFilm: testFilms[0],
  showedFilmsCount: 8
};

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: initialState,
  });

  let tree;
  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <App/>
        </Provider>);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
