import App from "@components/app/app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import mockFilms from "../../mocks/films";
import {ALL_GENRES, CountLimit} from "@consts";

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

it(`Render App`, () => {
  const store = mockStore(initialState);

  let tree;
  window.act(() => {
    tree = window.create(
        <Provider store={store}>
          <App/>
        </Provider>);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
