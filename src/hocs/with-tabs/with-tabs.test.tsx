import * as React from "react";
import * as renderer from "react-test-renderer";
import withTabs from "@hocs/with-tabs/with-tabs";
import {Tab} from "@consts";

interface MockComponentProps {
  children: React.ReactNode;
}

const MockComponent = (props: MockComponentProps) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withTabs(
  MockComponent,
  Tab.OVERVIEW,
  {
    [Tab.OVERVIEW]: () => <>OVERVIEW</>,
    [Tab.DETAILS]: () => <>DETAILS</>,
    [Tab.REVIEWS]: () => <>REVIEWS</>,
  }
);

it(`withTabs is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped filmId={`1`}>Test</MockComponentWrapped>
  ), {
    createNodeMock() {
      return {};
    }
  });

  expect(tree.toJSON()).toMatchSnapshot();
});
