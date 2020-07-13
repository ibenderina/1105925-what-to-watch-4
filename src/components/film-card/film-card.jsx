import {Link} from "react-router-dom";
import {useHistory} from "react-router";

const FilmCard = (props) => {
  const {id, title, genre, children, onMouseEnter, onMouseLeave, setCurrentGenre} = props;
  const history = useHistory();

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        setCurrentGenre(genre);
        history.push(`/films/${id}`);
      }}>
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={{pathname: `/films/${id}`}}>{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.node,
  setCurrentGenre: PropTypes.func.isRequired,
};

export default FilmCard;
