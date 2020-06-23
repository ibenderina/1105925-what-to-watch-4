const FilmInfoReviews = (props) => {
  const {film} = props;
  const {} = film;

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          <div className="review" key={film.title}>
            <blockquote className="review__quote">
              <p className="review__text">{film.title}</p>
              <footer className="review__details">
                <cite className="review__author">{film.title}</cite>
                <time className="review__date" dateTime="2016-12-24">{film.title}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{film.title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

FilmInfoReviews.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};

export default FilmInfoReviews;
