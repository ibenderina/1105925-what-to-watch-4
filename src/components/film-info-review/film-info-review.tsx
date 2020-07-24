import * as React from "react";
import {FilmComment} from "@api/adapter";

interface Props {
  comment: FilmComment
}

const FilmInfoReview = (props: Props) => {
  const {comment} = props;
  return (
    <>
      <div className="review" key={comment.id}>
        <blockquote className="review__quote">
          <p className="review__text">{comment.commentText}</p>
          <footer className="review__details">
            <cite className="review__author">{comment.commentAuthor}</cite>
            <time className="review__date" dateTime="2016-12-24">{comment.commentDate.toDateString()}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{comment.commentRating}</div>
      </div>
    </>
  );
};

export default FilmInfoReview;
