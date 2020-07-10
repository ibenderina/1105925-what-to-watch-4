import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews";
import {testComments} from "@utils/test-data";

it(`Should FilmInfoReviews render correctly`, () => {
  const comments = testComments;
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoReviews
      comments={comments}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
