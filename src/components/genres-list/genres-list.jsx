import {connect} from "react-redux";
import {setCurrentGenre} from "../../reducer";
import GenreListItem from "@components/genre-list-item/genre-list-item";

const _GenresList = (props) => {
  const {genres, currentGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return <GenreListItem
          key={genre}
          genre={genre}
          isCurrent={currentGenre === genre}
          onGenreClick={onGenreClick}
        />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
    currentGenre: state.currentGenre
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick: (genre) => {
      return dispatch(setCurrentGenre(genre));
    },
  };
};

const GenresList = connect(mapStateToProps, mapDispatchToProps)(_GenresList);

_GenresList.propTypes = {
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  currentGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenresList;
