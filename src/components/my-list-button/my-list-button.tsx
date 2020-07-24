import * as React from "react";
import Icon from "react-svg-use";

interface Props {
  filmId: number
  isFavorite: boolean
  toggleFavorite: (number, boolean) => void
}

const MyListButton = (props: Props) => {
  const {filmId, isFavorite, toggleFavorite} = props;
  return (
    <button className="btn btn--list movie-card__button" type="button"
      onClick={() => toggleFavorite(filmId, !isFavorite)}>
      {isFavorite ? <Icon id={`in-list`} width={18} height={14}/> : <Icon id={`add`} width={19} height={20}/>}
      <span>My list</span>
    </button>
  );
};

export default MyListButton;
