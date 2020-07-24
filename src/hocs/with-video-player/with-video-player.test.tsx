import * as React from "react";
import * as renderer from "react-test-renderer";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";

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

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`withVideoPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped image={'/'} url={'/'}>Test</MockComponentWrapped>
  ), {
    createNodeMock() {
      return {};
    }
  });

  expect(tree.toJSON()).toMatchSnapshot();
});
