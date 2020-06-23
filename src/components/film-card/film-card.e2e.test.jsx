import FilmCard from "@components/film-card/film-card";

it(`Should get film info and should film name be pressed`, () => {
  const handleFilmCardClick = jest.fn(()=>{});
  const filmTitle = `Hello`;
  const filmImage = `Hello`;
  const videoUrl = `Hello`;

  const main = window.shallow(
      <FilmCard
        filmTitle={filmTitle}
        filmImage={filmImage}
        videoUrl={videoUrl}
        handleFilmCardClick={handleFilmCardClick}
      />
  );

  main.props().onClick();
  expect(handleFilmCardClick.mock.calls.length).toBe(1);
});
