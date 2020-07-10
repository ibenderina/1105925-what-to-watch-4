import FilmInfo from "@components/film-info/film-info";
import {testFilms} from "@utils/test-data";
import {MemoryRouter} from "react-router-dom";
import {Tab} from "@consts";

it(`Should FilmInfo render correctly`, () => {
  let tree;
  window.act(() => {
    tree = window.create(
        <MemoryRouter>
          <FilmInfo
            activeTab={Tab.OVERVIEW}
            film={testFilms[0]}
            setActiveTab={() => {}}>
            test
          </FilmInfo>
        </MemoryRouter>
    );
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
