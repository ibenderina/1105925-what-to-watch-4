import FilmCard from "@components/film-card/film-card";

it(`Should get film info and should film name be pressed`, () => {
  const handleFilmCardClick = jest.fn(()=>{});
  const commonText = `Hello`;

  const main = window.shallow(
      <FilmCard
        filmTitle={commonText}
        image={commonText}
        url={commonText}
        handleFilmCardClick={handleFilmCardClick}
      />
  );

  main.props().onClick();
  expect(handleFilmCardClick.mock.calls.length).toBe(1);
});
