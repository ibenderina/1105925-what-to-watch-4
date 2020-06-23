import Main from "@components/main/main";
import films, {MainFilmInfo} from "../../mocks/films";

it(`Should Main render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(<Main
      filmName={MainFilmInfo.NAME}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
      filmsList={films}
      handleFilmCardClick={() => {}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
