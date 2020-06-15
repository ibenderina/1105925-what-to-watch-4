import App from "@app/app";
import {FILM_NAMES, MainFilmInfo} from "@consts";

it(`Render App`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<App
      filmName={MainFilmInfo.NAME}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
      filmNames={FILM_NAMES}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
