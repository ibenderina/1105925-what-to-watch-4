import * as React from "react";
import FilmCard from "@components/film-card/film-card.connect";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";
import {Film} from "@api/adapter";

const FilmCardWithVideoPlayer = withVideoPlayer(FilmCard);

interface Props {
  films: Film[]
}

const FilmsList = (props: Props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return <FilmCardWithVideoPlayer
          id={film.id}
          key={film.id}
          url={film.url}
          title={film.title}
          genre={film.genre}
          image={film.previewImage}
        />;
      })}
    </div>
  );
};

export default FilmsList;
