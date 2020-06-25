import FilmInfoReview from "@components/film-info-review/film-info-review";
import films from "../../mocks/films";

it(`Should FilmInfoReview render correctly`, () => {
  const comment = films[0].comments[0];
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoReview
      comment={comment}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
