import * as React from "react";
import * as renderer from "react-test-renderer";
import PageHeaderLogo from "@components/page-header-logo/page-header-logo";

it(`Should Page header logo render correctly`, () => {
  const tree = renderer.create(
    <PageHeaderLogo isLight={false}/>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

it(`Should Page header logo light render correctly`, () => {
  const tree = renderer.create(
    <PageHeaderLogo isLight={true}/>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
