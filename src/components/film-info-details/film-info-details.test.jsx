import FilmInfoDetails from "@components/film-info-details/film-info-details";
import films from "../../mocks/films";

it(`Should FilmInfoDetails render correctly`, () => {
  const film = films[0];
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoDetails
      film={film}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
