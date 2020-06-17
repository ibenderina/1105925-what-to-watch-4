import FilmCard from "@components/film-card/film-card";

it(`Should get film info and should film name be pressed`, () => {
  const onFilmTitleMouseEnter = jest.fn(()=>{});
  const onFilmTitleClick = jest.fn(()=>{});
  const filmTitle = `Undisputed`;
  const filmImage = `Undisputed.src`;

  const main = window.shallow(
      <FilmCard
        filmTitle={filmTitle}
        filmImage={filmImage}
        onFilmTitleMouseEnter={onFilmTitleMouseEnter}
        onFilmTitleClick={onFilmTitleClick}
      />
  );

  const filmCard = main.find(`.small-movie-card`).first();
  filmCard.props().onMouseEnter();
  expect(onFilmTitleMouseEnter.mock.calls.length).toBe(1);

  const filmCardTitle = main.find(`.small-movie-card__title`);
  filmCardTitle.props().onClick();
  expect(onFilmTitleClick.mock.calls.length).toBe(1);
});
