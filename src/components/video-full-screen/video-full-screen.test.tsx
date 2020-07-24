import * as React from "react";
import * as renderer from "react-test-renderer";
import VideoFullScreen from "@components/video-full-screen/video-full-screen";
import {testFilms} from "@utils/test-data";

it(`Should VideoFullScreen render correctly`, () => {
  let tree;
  // = renderer.create(
  //   <VideoFullScreen
  //     selectedFilm={() => testFilms[0]}
  //     history={{goBack: () => {}}}
  //     match={{params: {id: testFilms[0].id.toString()}}}
  //   />
  // );

  renderer.act(() => {
    tree = renderer.create(<VideoFullScreen
      selectedFilm={() => testFilms[0]}
      history={{goBack: () => {}}}
      match={{params: {id: testFilms[0].id.toString()}}}
    />);
  });
  console.log(tree);
  expect(tree.toJSON()).toMatchSnapshot();
});

