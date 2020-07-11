import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews.connect";
import {testComments, testFilms} from "@utils/test-data";
import configureStore from "redux-mock-store";
import {ALL_GENRES} from "../../consts/consts";
import NameSpace from "@reducer/name-space";
import {Provider} from "react-redux";

it(`Should FilmInfoReviews render correctly`, () => {
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
    [NameSpace.COMMENTS]: {
      1: testComments
    }
  });

  let tree;

  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <FilmInfoReviews filmId={`1`}/>
        </Provider>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
