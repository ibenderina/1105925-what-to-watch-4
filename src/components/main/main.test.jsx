import Main from "@components/main/main";
import mockFilms from "../../mocks/films";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Should Main render correctly`, () => {
  const store = mockStore({
    currentGenre: `all`,
    genres: [...(new Set(mockFilms.map((item) => {
      return item.genre;
    })))].slice(0, 9),
    films: mockFilms,
  });

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
