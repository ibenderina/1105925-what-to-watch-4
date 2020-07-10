import FilmInfoDetails from "@components/film-info-details/film-info-details";
import {Film} from "@api/adapter";

it(`Should FilmInfoDetails render correctly`, () => {
  let tree;

  window.act(() => {
    tree = window.create(<FilmInfoDetails
      film={new Film({})}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
