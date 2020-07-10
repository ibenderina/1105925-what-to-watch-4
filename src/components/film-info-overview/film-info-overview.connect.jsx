import {connect} from "react-redux";
import {getFilmById} from "@reducer/films/selectors";
import FilmInfoOverview from "@components/film-info-overview/film-info-overview";

const mapStateToProps = (state) => ({
  getFilmById: (filmId) => getFilmById(state, filmId),
});


export default connect(mapStateToProps, () => ({}))(FilmInfoOverview);
