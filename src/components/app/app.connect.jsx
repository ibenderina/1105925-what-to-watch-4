import {Operations as DataOperations} from "@reducer/films/films";
import {Operations as UserOperations} from "@reducer/user/user";
import {connect} from "react-redux";
import App from "@components/app/app";

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => {
    return dispatch(UserOperations.checkAuth());
  },
  loadFilms: () => {
    dispatch(DataOperations.loadFilms());
  },
  loadPromoFilm: () => {
    dispatch(DataOperations.loadPromoFilm());
  }
});

export default connect(() => ({}), mapDispatchToProps)(App);
