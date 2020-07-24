import * as React from "react";
import GenreListItem from "@components/genre-list-item/genre-list-item";
import {ALL_GENRES} from "@consts";

interface Props {
  genres: string[]
  currentGenre: string
  handleGenreClick: (genre: string) => void
}

const GenresList = (props: Props) => {
  const {genres, currentGenre, handleGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      <GenreListItem
        key={ALL_GENRES}
        genre={ALL_GENRES}
        isCurrent={currentGenre === ALL_GENRES}
        handleGenreClick={handleGenreClick}/>
      {genres.map((genre) => {
        return <GenreListItem
          key={genre}
          genre={genre}
          isCurrent={currentGenre === genre}
          handleGenreClick={handleGenreClick}
        />;
      })}
    </ul>
  );
};

export default GenresList;
