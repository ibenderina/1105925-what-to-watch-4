import FilmInfo from "@components/film-info/film-info";

it(`Should FilmInfo render correctly`, () => {
  const commonText = `Hello`;
  const commonNumber = 123;

  let tree;
  window.act(() => {
    tree = window.create(<FilmInfo
      film={
        {
          id: commonNumber,
          title: commonText,
          src: commonText,
          description: commonText,
          director: commonText,
          starring: commonText,
          genre: commonText,
          date: commonText,
          background: commonText,
          ratingScore: commonNumber,
          ratingCount: commonNumber,
          url: commonText,
          runTime: commonText,
          comments: [{
            commentAuthor: commonText,
            commentText: commonText,
            commentDate: commonText,
            commentRating: commonNumber,
          }]
        }
      }
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
