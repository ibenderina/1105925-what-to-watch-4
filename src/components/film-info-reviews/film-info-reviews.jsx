import FilmInfoReview from "@components/film-info-review/film-info-review";
import {FilmComment} from "@api/adapter";

const FilmInfoReviews = (props) => {
  const {comments} = props;
  const commentsHalfLength = parseInt(comments.length / 2, 10) + Math.ceil(comments.length % 2);
  const col1 = comments.slice(0, commentsHalfLength);
  const col2 = comments.slice(commentsHalfLength);

  const getComments = (filmComments) => {
    return (
      <div className="movie-card__reviews-col">
        {filmComments.map((comment) => {
          return <FilmInfoReview
            key={comment.id}
            comment={comment}
          />;
        })}
      </div>
    );
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      {getComments(col1)}
      {getComments(col2)}
    </div>
  );
};

FilmInfoReviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.instanceOf(FilmComment)).isRequired
};

export default FilmInfoReviews;

