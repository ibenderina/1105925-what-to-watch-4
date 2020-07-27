import * as React from "react";
import {Film} from "@api/adapter";
import {setTimeFormat} from "@utils/utils";

interface Props {
  filmId: string,
  getFilmById: (filmId: string) => Film
}

const FilmInfoDetails = (props: Props): React.ReactElement => {
  const {filmId, getFilmById} = props;
  const {genre, date, director, starring, runTime} = getFilmById(filmId);

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">{starring.join(`, `)}</span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{setTimeFormat(runTime).join('h ')}min</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{date}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default FilmInfoDetails;
