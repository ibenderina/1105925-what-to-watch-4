import {connect} from "react-redux";
import {getFilmComments} from "@reducer/comments/comments.selectors";
import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews";

const mapStateToProps = (state) => ({
  getComments: (filmId) => getFilmComments(state, filmId),
});

export default connect(mapStateToProps, () => ({}))(FilmInfoReviews);
