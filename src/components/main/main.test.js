import Main from "@main/main";
import {FILM_NAMES, MainFilmInfo} from "@consts";

it(`Should Main render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<Main
      filmName={MainFilmInfo.NAME}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
      filmNames={FILM_NAMES}
      onFilmTitleClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
