import FilmCard from "@components/film-card/film-card";

it(`Should Main render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<FilmCard
      filmTitle={`Undisputed`}
      filmImage={`Undisputed.src`}
      onClickFilmCard={() => {}}
      onFilmTitleMouseEnter={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
