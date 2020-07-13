import FilmCard from "@components/film-card/film-card.connect";
import withVideoPlayer from "@hocs/with-film-card";
import {Film} from "@api/adapter";

const FilmCardWithVideoPlayer = withVideoPlayer(FilmCard);

const FilmsList = (props) => {
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

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.instanceOf(Film).isRequired).isRequired,
};

export default FilmsList;
