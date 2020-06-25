import FilmInfoOverview from "@components/film-info-details/film-info-details";
import films from "../../mocks/films";

it(`Should FilmInfoOverview render correctly`, () => {
  const film = films[0];
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoOverview
      film={film}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
