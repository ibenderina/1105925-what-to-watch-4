import {connect} from "react-redux";
import {getFilmById} from "@reducer/films/selectors";
import AddReview from "@components/add-review/add-review";
import {getUserAccount} from "@reducer/user/selectors";
import {addCommentInProgress, addCommentSuccess, getErrorMessage} from "@reducer/comments/selectors";
import {Operations as CommentsOperations} from "@reducer/comments/comments";

const mapStateToProps = (state) => ({
  getFilmById: (filmId) => getFilmById(state, filmId),
  userAccount: getUserAccount(state),
  inProgress: addCommentInProgress(state),
  addIsSuccess: addCommentSuccess(state),
  statusMessage: getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (filmId, rating, comment) => {
    dispatch(CommentsOperations.addComment(filmId, rating, comment));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
