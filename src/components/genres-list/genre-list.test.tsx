import * as React from "react";
import * as renderer from "react-test-renderer";
import GenresList from "@components/genres-list/genres-list";
import {testGenresList} from "@utils/test-data";
import {ALL_GENRES} from "@consts";


it(`Should Genre List render correctly`, () => {
  const tree = renderer.create(
    <GenresList
      genres={testGenresList}
      currentGenre={ALL_GENRES}
      handleGenreClick={(genre: string) => {}}
    />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

