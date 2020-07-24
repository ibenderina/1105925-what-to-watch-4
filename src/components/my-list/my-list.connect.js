import {Operations} from "@reducer/films/films";
import {connect} from "react-redux";
import {getFavoriteFilms} from "@reducer/films/films.selectors";
import MyList from "@components/my-list/my-list";

const mapStateToProps = (state) => ({
  films: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms: () => {
    dispatch(Operations.loadFavoriteFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
