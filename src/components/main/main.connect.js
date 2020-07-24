import {Actions as FilmsActions} from "@reducer/films/films";
import {Operations as CommentsOperations} from "@reducer/comments/comments";
import {connect} from "react-redux";
import Main from "@components/main/main";
import {getShowMoreStatus, getFilmsByGenre, getPromoFilm} from "@reducer/films/films.selectors";
import {getFilmComments} from "@reducer/comments/comments.selectors";

const mapStateToProps = (state) => ({
  getFilmsList: (isSimilarList) => getFilmsByGenre(state, isSimilarList),
  promoFilm: getPromoFilm(state),
  isShowMore: getShowMoreStatus(state),
  getComments: (filmId) => getFilmComments(state, filmId),
});

const mapDispatchToProps = (dispatch) => ({
  showMore: () => {
    dispatch(FilmsActions.showMore());
  },
  loadFilmComments: (filmId) => {
    dispatch(CommentsOperations.loadFilmComments(filmId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
