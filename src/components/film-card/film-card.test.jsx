import FilmCard from "@components/film-card/film-card";
import {MemoryRouter} from "react-router-dom";

it(`Should FilmCard render correctly`, () => {
  const commonText = `Hello`;
  let tree;

  window.act(() => {
    tree = window.create(
        <MemoryRouter>
          <FilmCard
            id={1}
            title={commonText}
            genre={commonText}
            image={commonText}
            url={commonText}
            setCurrentGenre={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}>
          </FilmCard>
        </MemoryRouter>);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
