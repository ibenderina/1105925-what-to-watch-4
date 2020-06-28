import Main from "@components/main/main";
import mockFilms from "../../mocks/films";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {ALL_GENRES, CountLimit} from "../../consts/consts";

const mockStore = configureStore([]);
const initialState = {
  currentGenre: ALL_GENRES,
  genres: [...(new Set(mockFilms.map((item) => {
    return item.genre;
  })))].slice(0, CountLimit.MAX_GENRES),
  films: mockFilms.slice(0, CountLimit.MAX_FILMS),
  isMoreFilms: true,
  promoFilm: mockFilms[0]
};

it(`Should Main render correctly`, () => {
  const store = mockStore(initialState);

  let tree;

  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <Main/>
        </Provider>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
