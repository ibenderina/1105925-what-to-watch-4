import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmInfoReview from "@components/film-info-review/film-info-review";
import {testComments} from "@utils/test-data";

it(`Should FilmInfoReview render correctly`, () => {
  const comment = testComments[0];
  const tree = renderer.create(<FilmInfoReview comment={comment}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});
