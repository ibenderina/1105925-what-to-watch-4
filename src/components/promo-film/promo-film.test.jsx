import PromoFilm from "@components/promo-film/promo-film";

it(`Should PromoFilm render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<PromoFilm
      film={
        {
          title: `Hi`,
          src: `Hi`,
          genre: `Hi`,
          date: `Hi`,
          background: `Hi`,
        }
      }
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
