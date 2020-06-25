import Main from "@components/main/main";
import films from "../../mocks/films";

it(`Should Main render correctly`, () => {
  const film = films[0];
  let tree;

  window.act(() => {
    tree = window.create(<Main
      filmName={film.title}
      filmGenre={film.genre}
      filmDate={film.date}
      filmsList={films}
      handleFilmCardClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
