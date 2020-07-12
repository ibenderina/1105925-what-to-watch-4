import {setTextRating} from "@utils/utils";

const FilmInfoOverview = (props) => {
  const {filmId, getFilmById} = props;
  const {ratingScore, ratingCount, description, director, starring} = getFilmById(filmId);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}
        </div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{setTextRating(ratingCount)}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {(starring || []).join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

FilmInfoOverview.propTypes = {
  filmId: PropTypes.string.isRequired,
  getFilmById: PropTypes.func.isRequired,
};

export default FilmInfoOverview;
