const FilmCard = (props) => {
  const {filmTitle, filmImage, onFilmTitleClick, onFilmTitleMouseEnter} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onFilmTitleMouseEnter}>
      <div className="small-movie-card__image">
        <img src={filmImage} alt={filmTitle} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={onFilmTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{filmTitle}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmImage: PropTypes.string.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmTitleMouseEnter: PropTypes.func.isRequired,
};

export default FilmCard;
