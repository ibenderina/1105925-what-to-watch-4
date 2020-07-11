import FilmCard from "@components/film-card/film-card";
import {MemoryRouter} from "react-router-dom";

it(`Should FilmCard render correctly`, () => {
  const commonText = `Hello`;
  let tree;

  window.act(() => {
    tree = window.create(
        <MemoryRouter>
          <FilmCard
            filmId={1}
            filmTitle={commonText}
            image={commonText}
            url={commonText}
            handleFilmCardClick={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}>
          </FilmCard>
        </MemoryRouter>);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
