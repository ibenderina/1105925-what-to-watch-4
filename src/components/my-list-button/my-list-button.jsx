import Icon from "react-svg-use";

const MyListButton = (props) => {
  const {filmId, isFavorite, toggleFavorite} = props;
  return (
    <button className="btn btn--list movie-card__button" type="button"
      onClick={() => toggleFavorite(filmId, !isFavorite)}>
      {isFavorite ? <Icon id={`in-list`} width={18} height={14}/> : <Icon id={`add`} width={19} height={20}/>}
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default MyListButton;
