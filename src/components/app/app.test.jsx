import App from "@components/app/app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import mockFilms from "../../mocks/films";
import {ALL_GENRES} from "@consts";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    currentGenre: ALL_GENRES,
    genres: [...(new Set(mockFilms.map((item) => {
      return item.genre;
    })))].slice(0, 9),
    films: mockFilms,
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
