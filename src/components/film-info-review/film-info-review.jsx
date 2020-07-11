import {FilmComment} from "@api/adapter";

const FilmInfoReview = (props) => {
  const {comment} = props;

  return (
    <>
      <div className="review" key={comment.id}>
        <blockquote className="review__quote">
          <p className="review__text">{comment.commentText}</p>
          <footer className="review__details">
            <cite className="review__author">{comment.commentAuthor}</cite>
            <time className="review__date" dateTime="2016-12-24">{comment.commentDate}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{comment.commentRating}</div>
      </div>
    </>
  );
};

FilmInfoReview.propTypes = {
  comment: PropTypes.instanceOf(FilmComment)
};

export default FilmInfoReview;
