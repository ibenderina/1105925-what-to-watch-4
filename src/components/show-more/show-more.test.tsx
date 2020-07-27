import * as React from "react";
import * as renderer from "react-test-renderer";
import ShowMore from "@components/show-more/show-more";

it(`Should Show more render correctly`, () => {
  const tree = renderer.create(
    <ShowMore handleShowButtonClick={() => {}}/>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
