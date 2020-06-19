import PromoFilm from "@components/promo-film/promo-film";

it(`Should PromoFilm render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<PromoFilm
      film={
        {
          id: 3,
          title: `Hi`,
          src: `Hi`,
          description: `Hi`,
          director: `Hi`,
          starring: `Hi`,
          genre: `Hi`,
          date: `Hi`,
          background: `Hi`,
          ratingScore: 111,
          ratingCount: 111,
        }
      }
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
