import Main from "@components/main/main";
import {MainFilmInfo} from "@consts";
import films from "../../mocks/films";

it(`Should Main render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<Main
      filmName={MainFilmInfo.NAME}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
      filmsList={films}
      onFilmTitleClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
