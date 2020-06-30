import FilmInfoDetails from "@components/film-info-details/film-info-details";
import {testMockFilm} from "../../mocks/test-mock-film";

it(`Should FilmInfoDetails render correctly`, () => {
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoDetails
      film={testMockFilm}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
