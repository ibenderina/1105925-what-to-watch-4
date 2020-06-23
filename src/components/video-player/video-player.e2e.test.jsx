import VideoPlayer from "@components/video-player/video-player";

const videoUrl = `Hello`;
const filmImage = `Hello`;

const checkVideoPlayer = (isPlayed) => {
  return window.shallow(
      <VideoPlayer
        videoUrl={videoUrl}
        filmImage={filmImage}
        isMuted={true}
        isPlayed={isPlayed}
      />
  );
};

it(`Should set isPlayed-true`, () => {
  const video = checkVideoPlayer(true);
  expect(video.props().src).toEqual(videoUrl);
});

it(`Should set isPlayed-false`, () => {
  const video = checkVideoPlayer(false);
  expect(video.props().src).toEqual(``);
});

