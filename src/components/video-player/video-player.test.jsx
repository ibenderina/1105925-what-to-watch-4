import VideoPlayer from "@components/video-player/video-player";

it(`Should VideoPlayer render correctly`, () => {
  const url = `Hello`;
  const image = `Hello`;

  let tree;
  window.act(() => {
    tree = window.create(<VideoPlayer
      url={url}
      image={image}
      isMuted={true}
      isPlayed={true}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
