import FilmsList from "@components/films-list/films-list";
import {testMockFilm} from "@mocks/test-mock-film";

it(`Should FilmsList render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<FilmsList
      films={[testMockFilm]}
      handleFilmCardClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
