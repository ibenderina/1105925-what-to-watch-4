const GenreListItem = (props) => {
  const {genre, isCurrent, onGenreClick} = props;

  return (
    <li className={isCurrent ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
      <a href="#" className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          console.log(genre)
          onGenreClick(genre);
        }}>{genre}</a>
    </li>
  );
};

GenreListItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenreListItem;
