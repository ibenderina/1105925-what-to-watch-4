import * as React from "react";
import {ClassName} from "@consts";

interface Props {
  genre: string
  isCurrent: boolean
  handleGenreClick: (genre: string) => void
}

const GenreListItem = (props: Props) => {
  const {genre, isCurrent, handleGenreClick} = props;

  return (
    <li className={isCurrent ? ClassName.ACTIVE_GENRE : ClassName.INACTIVE_GENRE}>
      <a href="#" className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          handleGenreClick(genre);
        }}>

        {genre}

      </a>
    </li>
  );
};

export default GenreListItem;
