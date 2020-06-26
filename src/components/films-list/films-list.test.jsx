import FilmsList from "@components/films-list/films-list";
import films from "../../mocks/films";

it(`Should FilmsList render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<FilmsList
      films={films}
      handleFilmCardClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
