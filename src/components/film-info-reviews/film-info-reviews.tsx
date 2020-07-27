import * as React from "react";
import FilmInfoReview from "@components/film-info-review/film-info-review";
import {FilmComment} from "@api/adapter";

interface Props {
  filmId: string,
  getComments: (filmId: string) => FilmComment[]
}

const FilmInfoReviews = (props: Props): React.ReactElement => {
  const {filmId, getComments} = props;
  const comments = getComments(filmId);
  const commentsHalfLength = Math.round(comments.length / 2) + Math.ceil(comments.length % 2);
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

export default FilmInfoReviews;

