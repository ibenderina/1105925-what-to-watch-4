import * as React from "react";
import * as renderer from "react-test-renderer";
import VideoPlayer from "@components/video-player/video-player";

it(`Should VideoPlayer render correctly`, () => {
  const url = `Hello`;
  const image = `Hello`;

  const tree = renderer.create(
    <VideoPlayer
      url={url}
      image={image}
      isMuted={true}
      isPlayed={true}
    />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
