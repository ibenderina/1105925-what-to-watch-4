import {Actions as FilmsActions} from "@reducer/films/films";
import {connect} from "react-redux";
import FilmCard from "@components/film-card/film-card";

const mapDispatchToProps = (dispatch) => ({
  setCurrentGenre: (genre) => {
    dispatch(FilmsActions.setCurrentGenre(genre));
  }
});

export default connect(() => ({}), mapDispatchToProps)(FilmCard);
