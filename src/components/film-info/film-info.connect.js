import {connect} from "react-redux";
import {getFilmById} from "@reducer/films/films.selectors";
import FilmInfo from "@components/film-info/film-info";
import {getAuthState} from "@reducer/user/user.selectors";

const mapStateToProps = (state) => ({
  isLogged: getAuthState(state),
  getFilmById: (filmId) => getFilmById(state, filmId),
});

export default connect(mapStateToProps, () => ({}))(FilmInfo);
