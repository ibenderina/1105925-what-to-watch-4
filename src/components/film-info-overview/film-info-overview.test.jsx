import FilmInfoOverview from "@components/film-info-details/film-info-details";
import {testFilms} from "@utils/test-data";

it(`Should FilmInfoOverview render correctly`, () => {
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoOverview
      film={testFilms[0]}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
