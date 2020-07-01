import FilmInfo from "@components/film-info/film-info";
import {testMockFilm} from "@mocks/test-mock-film";

it(`Should FilmInfo render correctly`, () => {

  let tree;
  window.act(() => {
    tree = window.create(
        <FilmInfo
          film={testMockFilm}
          setActiveTab={() => {}}>
          test
        </FilmInfo>);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
