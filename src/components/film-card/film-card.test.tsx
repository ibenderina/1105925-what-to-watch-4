import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmCard from "@components/film-card/film-card";
import {MemoryRouter} from "react-router-dom";

it(`Should FilmCard render correctly`, () => {
  const commonText = `Hello`;
  const tree = renderer.create(
        <MemoryRouter>
          <FilmCard
            id={1}
            title={commonText}
            genre={commonText}
            setCurrentGenre={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          >
            Test
          </FilmCard>
        </MemoryRouter>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
