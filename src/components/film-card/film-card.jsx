import {Link} from "react-router-dom";

const FilmCard = (props) => {
  const {filmId, filmTitle, handleFilmCardClick, children, onMouseEnter, onMouseLeave} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleFilmCardClick}>
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={{pathname: `/films/${filmId}`}}>{filmTitle}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  filmId: PropTypes.number.isRequired,
  filmTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default FilmCard;
