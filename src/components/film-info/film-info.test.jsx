import FilmInfo from "@components/film-info/film-info.connect";
import {testComments, testFilms} from "@utils/test-data";
import {MemoryRouter} from "react-router-dom";
import {ALL_GENRES, Tab} from "@consts";
import configureStore from "redux-mock-store";
import NameSpace from "@reducer/name-space";
import {Provider} from "react-redux";

it(`Should FilmInfo render correctly`, () => {
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
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
