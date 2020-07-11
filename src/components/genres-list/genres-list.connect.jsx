import {Actions as FilmsActions} from "@reducer/films/films";
import {connect} from "react-redux";
import GenresList from "@components/genres-list/genres-list";
import {getCurrentGenre, getGenresList} from "@reducer/films/selectors";

const mapStateToProps = (state) => ({
  genres: getGenresList(state),
  currentGenre: getCurrentGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleGenreClick: (genre) => {
    return dispatch(FilmsActions.setCurrentGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
