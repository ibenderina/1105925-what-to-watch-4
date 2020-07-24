import {connect} from "react-redux";
import {getFilmById} from "@reducer/films/films.selectors";
import FilmInfoDetails from "@components/film-info-details/film-info-details";

const mapStateToProps = (state) => ({
  getFilmById: (filmId) => getFilmById(state, filmId),
});

export default connect(mapStateToProps, () => ({}))(FilmInfoDetails);
