import App from "@components/app/app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {ALL_GENRES} from "@consts";
import {testMockFilm} from "../../mocks/test-mock-film";

const mockStore = configureStore([]);
const initialState = {
  currentGenre: ALL_GENRES,
  genres: [testMockFilm.genre],
  films: [testMockFilm],
  isMoreFilms: true,
  promoFilm: testMockFilm
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
