import VideoPlayer from "@components/video-player/video-player";

const url = `Hello`;
const image = `Hello`;

const checkVideoPlayer = (isPlayed) => {
  return window.shallow(
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

