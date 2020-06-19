const FilmCard = (props) => {
  const {filmTitle, filmImage, onClickFilmCard} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={onClickFilmCard}>
      <div className="small-movie-card__image">
        <img src={filmImage} alt={filmTitle} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{filmTitle}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmImage: PropTypes.string.isRequired,
  onClickFilmCard: PropTypes.func.isRequired,
};

export default FilmCard;
