import PromoFilm from "@components/promo-film/promo-film";
import {testFilms} from "@utils/test-data";

it(`Should PromoFilm render correctly`, () => {
  let tree;

  window.act(() => {
    tree = window.create(<PromoFilm
      film={testFilms[0]}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
