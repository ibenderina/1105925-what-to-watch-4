import {connect} from "react-redux";
import AddReview from "@components/add-review/add-review";
import {getFilmById} from "@reducer/films/films.selectors";
import {getUserAccount} from "@reducer/user/user.selectors";
import {Operations as CommentsOperations} from "@reducer/comments/comments";
import {addCommentInProgress, addCommentIsSuccess, getErrorMessage} from "@reducer/comments/comments.selectors";

const mapStateToProps = (state) => ({
  getFilmById: (filmId) => getFilmById(state, filmId),
  userAccount: getUserAccount(state),
  inProgress: addCommentInProgress(state),
  addIsSuccess: addCommentIsSuccess(state),
  statusMessage: getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (filmId, rating, comment) => {
    dispatch(CommentsOperations.addComment(filmId, rating, comment));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
