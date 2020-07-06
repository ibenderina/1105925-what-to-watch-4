import VideoFullScreen from "@components/video-full-screen/video-full-screen";

it(`Should VideoFullScreen render correctly`, () => {
  const commonNumber = 1;

  let tree;
  window.act(() => {
    tree = window.create(<VideoFullScreen
      history={{goBack: () => {}}}
      match={{params: {filmId: commonNumber}}}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

