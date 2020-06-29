import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews";
import {testMockFilm} from "../../mocks/test-mock-film";

it(`Should FilmInfoReviews render correctly`, () => {
  const comments = testMockFilm.comments;
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoReviews
      comments={comments}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
