import FilmsList from "@components/films-list/films-list";
import {testFilms} from "@utils/test-data";
import {MemoryRouter} from "react-router-dom";

it(`Should FilmsList render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(
        <MemoryRouter>
          <FilmsList
            films={testFilms}
            handleFilmCardClick={() => {}}
          />
        </MemoryRouter>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
