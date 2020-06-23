import FilmInfo from "@components/film-info/film-info";

it(`Should FilmInfo render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<FilmInfo
      film={
        {
          id: 111,
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
          videoUrl: `Hi`,
        }
      }
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
