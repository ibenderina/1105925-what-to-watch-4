import FilmInfoReview from "@components/film-info-review/film-info-review";
import {testMockFilm} from "../../mocks/test-mock-film";

it(`Should FilmInfoReview render correctly`, () => {
  const comment = testMockFilm.comments[0];
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoReview
      comment={comment}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
