import FilmInfo from "@components/film-info/film-info";

it(`Should FilmInfo render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<FilmInfo
      film={
        {
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
