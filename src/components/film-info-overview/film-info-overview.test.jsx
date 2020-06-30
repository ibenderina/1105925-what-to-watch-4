import FilmInfoOverview from "@components/film-info-details/film-info-details";
import {testMockFilm} from "../../mocks/test-mock-film";

it(`Should FilmInfoOverview render correctly`, () => {
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoOverview
      film={testMockFilm}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
