import GenreListItem from "@components/genre-list-item/genre-list-item";
import {ALL_GENRES} from "@consts";

const GenresList = (props) => {
  const {genres, currentGenre, handleGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      <GenreListItem
        key={ALL_GENRES}
        genre={ALL_GENRES}
        isCurrent={currentGenre === ALL_GENRES}
        handleGenreClick={handleGenreClick}/>
      {genres.map((genre) => {
        return <GenreListItem
          key={genre}
          genre={genre}
          isCurrent={currentGenre === genre}
          handleGenreClick={handleGenreClick}
        />;
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  currentGenre: PropTypes.string.isRequired,
  handleGenreClick: PropTypes.func.isRequired,
};


export default GenresList;
