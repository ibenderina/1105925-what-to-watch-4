import {Operations as DataOperations} from "@reducer/films/films";
import {Operations as UserOperations} from "@reducer/user/user";
import {connect} from "react-redux";
import App from "@components/app/app";

const mapDispatchToProps = (dispatch) => ({
  init: () => {
    dispatch(UserOperations.checkAuth());
    dispatch(DataOperations.loadFilms());
    dispatch(DataOperations.loadPromoFilm());
  }
});

export default connect(() => ({}), mapDispatchToProps)(App);
