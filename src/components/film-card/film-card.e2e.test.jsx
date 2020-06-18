import FilmCard from "@components/film-card/film-card";

it(`Should get film info and should film name be pressed`, () => {
  const onClickFilmCard = jest.fn(()=>{});
  const filmTitle = `Undisputed`;
  const filmImage = `Undisputed.src`;

  const main = window.shallow(
      <FilmCard
        filmTitle={filmTitle}
        filmImage={filmImage}
        onClickFilmCard={onClickFilmCard}
      />
  );

  const filmCard = main.find(`.small-movie-card`).first();
  filmCard.props().onClick();
  expect(onClickFilmCard.mock.calls.length).toBe(1);
});
