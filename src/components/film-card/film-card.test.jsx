import FilmCard from "@components/film-card/film-card";

it(`Should FilmCard render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<FilmCard
      filmTitle={`Hello`}
      filmImage={`Hello`}
      videoUrl={`Hello`}
      handleFilmCardClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
