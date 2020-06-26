import FilmCard from "@components/film-card/film-card";

it(`Should FilmCard render correctly`, () => {
  const commonText = `Hello`;
  let tree;

  window.act(() => {
    tree = window.create(<FilmCard
      filmTitle={commonText}
      image={commonText}
      url={commonText}
      handleFilmCardClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
