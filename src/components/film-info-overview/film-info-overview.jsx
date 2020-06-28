import {setTextRating} from "@utils";

const FilmInfoOverview = (props) => {
  const {film} = props;
  const {ratingScore, ratingCount, description, director, starring} = film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}
        </div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{setTextRating(ratingScore)}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring} and other</strong></p>
      </div>
    </>
  );
};

FilmInfoOverview.propTypes = {
  film: PropTypes.shape({
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default FilmInfoOverview;