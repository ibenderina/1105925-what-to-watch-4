import PromoFilm from "@components/promo-film/promo-film";

it(`Should PromoFilm render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<PromoFilm
      filmTitle={`Undisputed`}
      filmImage={`Undisputed`}
      filmGenre={`Undisputed`}
      filmDate={`Undisputed`}
      filmBackground={`Undisputed`}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
