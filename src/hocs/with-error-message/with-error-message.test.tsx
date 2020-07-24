import * as React from "react";
import * as renderer from "react-test-renderer";
import withErrorMessage from "@hocs/with-error-message/with-error-message";

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

const MockComponentWrapped = withErrorMessage(MockComponent);

it(`withTabs is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped/>
  ), {
    createNodeMock() {
      return {};
    }
  });

  expect(tree.toJSON()).toMatchSnapshot();
});
