import * as React from "react";
import * as renderer from "react-test-renderer";
import GenreListItem from "@components/genre-list-item/genre-list-item";

it(`Should GenreListItem render correctly`, () => {
  const tree = renderer.create(
    <GenreListItem
      genre={`Drama`}
      isCurrent={true}
      handleGenreClick={() => {}}
    />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

