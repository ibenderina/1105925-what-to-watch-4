import {ClassName} from "@consts";

const GenreListItem = (props) => {
  const {genre, isCurrent, handleGenreClick} = props;

  return (
    <li className={isCurrent ? ClassName.ACTIVE_GENRE : ClassName.INACTIVE_GENRE}>
      <a href="#" className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          handleGenreClick(genre);
        }}>

        {genre}

      </a>
    </li>
  );
};

GenreListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  handleGenreClick: PropTypes.func.isRequired,
};

export default GenreListItem;
