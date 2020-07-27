import * as React from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import {PageRoute} from "@consts";

interface Props {
  id: number
  title: string
  genre: string
  children: React.ReactNode | React.ReactNodeArray
  onMouseEnter: () => void
  onMouseLeave: () => void
  setCurrentGenre: (genre: string) => void
}

const FilmCard = (props: Props): React.ReactElement => {
  const {id, title, genre, children, onMouseEnter, onMouseLeave, setCurrentGenre} = props;
  const history = useHistory();

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        setCurrentGenre(genre);
        history.push(`${PageRoute.FILMS}/${id}`);
      }}>
      <div className="small-movie-card__image">
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={{pathname: `${PageRoute.FILMS}/${id}`}}>{title}</Link>
      </h3>
    </article>
  );
};

export default FilmCard;
