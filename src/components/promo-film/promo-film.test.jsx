import PromoFilm from "@components/promo-film/promo-film";

it(`Should PromoFilm render correctly`, () => {
  const commonText = `Hello`;
  const commonNumber = 1;
  let tree;

  window.act(() => {
    tree = window.create(<PromoFilm
      film={
        {
          id: commonNumber,
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
