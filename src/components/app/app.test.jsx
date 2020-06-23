import App from "@components/app/app";
import films, {MainFilmInfo} from "../../mocks/films";

it(`Render App`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<App
      filmName={MainFilmInfo.NAME}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
      filmsList={films}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
