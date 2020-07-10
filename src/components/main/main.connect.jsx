import {Actions as FilmsActions} from "@reducer/films/films";
import {Operations as CommentsOperations} from "@reducer/comments/comments";
import {connect} from "react-redux";
import Main from "@components/main/main";
import NameSpace from "@reducer/name-space";
import {getCurrentGenre, getFilmById, getFilmsByGenre, getPromoFilm} from "@reducer/films/selectors";
import {getFilmComments} from "@reducer/comments/selectors";

const mapStateToProps = (state) => {
  return {
    filmsList: getFilmsByGenre(state),
    isMoreFilms: state[NameSpace.FILMS].isMoreFilms,
    promoFilm: getPromoFilm(state),
    currentGenre: getCurrentGenre(state),
    selectedFilm: (filmId) => getFilmById(state, filmId),
    getComments: (filmId) => getFilmComments(state, filmId),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentGenre: (genre) => {
      return dispatch(FilmsActions.setCurrentGenre(genre));
    },
    showMore: () => {
      dispatch(FilmsActions.showMore());
    },
    loadFilmComments: (filmId) => {
      dispatch(CommentsOperations.loadFilmComments(filmId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
