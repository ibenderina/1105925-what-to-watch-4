import PromoFilm from "@components/promo-film/promo-film";

it(`Should PromoFilm render correctly`, () => {
  const commonText = `Hello`;
  let tree;

  window.act(() => {
    tree = window.create(<PromoFilm
      film={
        {
          title: commonText,
          src: commonText,
          genre: commonText,
          date: commonText,
          background: commonText,
        }
      }
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
