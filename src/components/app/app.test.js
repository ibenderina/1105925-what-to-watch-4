import App from "@components/app/app";
import {MainFilmInfo} from "@consts";
import films from "../../mocks/films";

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
