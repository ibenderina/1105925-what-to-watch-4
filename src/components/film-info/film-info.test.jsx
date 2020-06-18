import FilmInfo from "@components/film-info/film-info";

it(`Should FilmInfo render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<FilmInfo
      filmImage={`Undisputed`}
      filmTitle={`Undisputed`}
      filmDescription={`Undisputed`}
      filmDirector={`Undisputed`}
      filmStarring={`Undisputed`}
      filmGenre={`Undisputed`}
      filmDate={`Undisputed`}
      filmBackground={`Undisputed`}
      filmRatingScore={111}
      filmRatingCount={111}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
