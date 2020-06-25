import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews";
import films from "../../mocks/films";

it(`Should FilmInfoReviews render correctly`, () => {
  const comments = films[0].comments;
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoReviews
      comments={comments}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
