import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from "@components/video-player/video-player";

Enzyme.configure({adapter: new Adapter()});

const url = `Hello`;
const image = `Hello`;

const checkVideoPlayer = (isPlayed) => {
  return Enzyme.shallow(
      <VideoPlayer
        url={url}
        image={image}
        isMuted={true}
        isPlayed={isPlayed}
      />
  );
};

it(`Should set isPlayed-true`, () => {
  const video = checkVideoPlayer(true);
  expect(video.props().src).toEqual(url);
});

it(`Should set isPlayed-false`, () => {
  const video = checkVideoPlayer(false);
  expect(video.props().src).toEqual(``);
});

