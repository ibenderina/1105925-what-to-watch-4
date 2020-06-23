import VideoPlayer from "@components/video-player/video-player";

it(`Should VideoPlayer render correctly`, () => {
  const videoUrl = `Hello`;
  const filmImage = `Hello`;

  let tree;
  window.act(() => {
    tree = window.create(<VideoPlayer
      videoUrl={videoUrl}
      filmImage={filmImage}
      isMuted={true}
      isPlayed={true}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
