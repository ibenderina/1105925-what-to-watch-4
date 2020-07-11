import FilmInfoReview from "@components/film-info-review/film-info-review";

const FilmInfoReviews = (props) => {
  const {filmId, getComments} = props;
  const comments = getComments(filmId);
  const commentsHalfLength = parseInt(comments.length / 2, 10) + Math.ceil(comments.length % 2);
  const col1 = comments.slice(0, commentsHalfLength);
  const col2 = comments.slice(commentsHalfLength);

  const renderComments = (filmComments) => (
    <div className="movie-card__reviews-col">
      {filmComments.map((comment) => {
        return <FilmInfoReview
          key={comment.id}
          comment={comment}
        />;
      })}
    </div>
  );

  return (
    <div className="movie-card__reviews movie-card__row">
      {renderComments(col1)}
      {renderComments(col2)}
    </div>
  );
};

FilmInfoReviews.propTypes = {
  filmId: PropTypes.string.isRequired,
  getComments: PropTypes.func.isRequired
};

export default FilmInfoReviews;

