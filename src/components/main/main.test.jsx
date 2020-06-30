import Main from "@components/main/main";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {ALL_GENRES} from "../../consts/consts";
import {testMockFilm} from "../../mocks/test-mock-film";

const mockStore = configureStore([]);
const initialState = {
  currentGenre: ALL_GENRES,
  genres: [testMockFilm.genre],
  films: [testMockFilm],
  isMoreFilms: true,
  promoFilm: testMockFilm
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
