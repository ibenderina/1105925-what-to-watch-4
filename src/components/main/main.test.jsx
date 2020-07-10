import Main from "@components/main/main.connect";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {ALL_GENRES} from "@consts";
import {testFilms} from "@utils/test-data";
import NameSpace from "@reducer/name-space";
import {MemoryRouter} from 'react-router-dom';

const mockStore = configureStore([]);
const initialState = {
  currentGenre: ALL_GENRES,
  genres: [...new Set(testFilms.map((f) => f.genre))],
  films: testFilms,
  isMoreFilms: true,
  promoFilm: testFilms[0],
  showedFilmsCount: 8
};

it(`Should Main render correctly`, () => {
  const store = mockStore({
    [NameSpace.FILMS]: initialState,
  });

  let tree;

  window.act(() => {
    tree = window.create(
        <MemoryRouter>
          <Provider store={store}>
            <Main match={{params: {id: null}}} history={{goBack: () => {}, push: () => {}}}/>
          </Provider>
        </MemoryRouter>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
