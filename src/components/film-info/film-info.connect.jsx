import {connect} from "react-redux";
import {getFilmById} from "@reducer/films/selectors";
import FilmInfo from "@components/film-info/film-info";

const mapStateToProps = (state) => ({
  getFilmById: (filmId) => getFilmById(state, filmId),
});


export default connect(mapStateToProps, () => ({}))(FilmInfo);
