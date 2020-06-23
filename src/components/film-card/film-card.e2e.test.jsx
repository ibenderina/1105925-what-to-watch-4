import FilmCard from "@components/film-card/film-card";

it(`Should get film info and should film name be pressed and should mouse enter on Film Card`, () => {
  const onClickFilmCard = jest.fn(()=>{});
  const onFilmTitleMouseEnter = jest.fn(()=>{});
  const filmTitle = `Undisputed`;
  const filmImage = `Undisputed.src`;

  const main = window.shallow(
      <FilmCard
        filmTitle={filmTitle}
        filmImage={filmImage}
        onClickFilmCard={onClickFilmCard}
        onFilmTitleMouseEnter={onFilmTitleMouseEnter}
      />
  );

  const filmCard = main.find(`.small-movie-card`).first();

  filmCard.props().onMouseEnter();
  expect(onFilmTitleMouseEnter.mock.calls.length).toBe(1);

  filmCard.props().onClick();
  expect(onClickFilmCard.mock.calls.length).toBe(1);
});
