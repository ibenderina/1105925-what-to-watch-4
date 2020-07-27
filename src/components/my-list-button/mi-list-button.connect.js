import {connect} from "react-redux";
import {Operations} from "@reducer/films/films";
import MyListButton from "@components/my-list-button/my-list-button";

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (filmId, status) => {
    dispatch(Operations.toggleIsFavorite(filmId, status));
  },
});

export default connect(() => ({}), mapDispatchToProps)(MyListButton);
