import FilmInfoDetails from "@components/film-info-details/film-info-details.connect";
import configureStore from "redux-mock-store";
import {ALL_GENRES} from "@consts";
import {testFilms} from "@utils/test-data";
import NameSpace from "@reducer/name-space";
import {Provider} from "react-redux";

it(`Should FilmInfoDetails render correctly`, () => {
  const mockStore = configureStore([]);
  const initialState = {
    currentGenre: ALL_GENRES,
    genres: [...new Set(testFilms.map((f) => f.genre))],
    films: testFilms,
    promoFilm: testFilms[0],
    showedFilmsCount: 8
  };
  const store = mockStore({
    [NameSpace.FILMS]: initialState,
  });
  let tree;

  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <FilmInfoDetails filmId={`1`}/>
        </Provider>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
