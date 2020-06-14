import React from "react";
import {create, act} from "react-test-renderer";
import App from "@app/app";
import {FILMS_NAMES, MainFilmInfo} from "@consts";

it(`Render App`, () => {
  let tree;
  act(() => {
    tree = create(<App
      filmName={MainFilmInfo.NAME}
      filmNames={FILMS_NAMES}
      filmGenre={MainFilmInfo.GENRE}
      filmDate={MainFilmInfo.DATE}
    />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
