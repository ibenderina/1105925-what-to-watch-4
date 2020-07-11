import FilmInfoReview from "@components/film-info-review/film-info-review";
import {testComments} from "@utils/test-data";

it(`Should FilmInfoReview render correctly`, () => {
  const comment = testComments[0];
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoReview
      comment={comment}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
