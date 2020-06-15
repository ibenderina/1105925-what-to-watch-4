import Main from "@main/main";
import {FILM_NAMES, MainFilmInfo} from "@consts";

it(`Should film name be pressed`, () => {
  const onFilmTitleClick = jest.fn(()=>{});

  const main = window.shallow(
      <Main
        filmName={MainFilmInfo.NAME}
        filmNames={FILM_NAMES}
        filmGenre={MainFilmInfo.GENRE}
        filmDate={MainFilmInfo.DATE}
        onFilmTitleClick={onFilmTitleClick}
      />
  );

  const filmTitle = main.find(`.small-movie-card__title`).first();

  filmTitle.props().onClick();

  expect(onFilmTitleClick.mock.calls.length).toBe(1);
});
