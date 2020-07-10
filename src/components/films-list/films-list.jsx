import FilmCard from "@components/film-card/film-card";
import withVideoPlayer from "@hocs/with-film-card";
import {Film} from "@api/adapter";

const FilmCardWithVideoPlayer = withVideoPlayer(FilmCard);

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, handleFilmCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return <FilmCardWithVideoPlayer
            filmId={film.id}
            key={film.id}
            url={film.url}
            filmTitle={film.title}
            image={film.previewImage}
            handleFilmCardClick={() => handleFilmCardClick(film.id)}
          />;
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  handleFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.instanceOf(Film).isRequired).isRequired,
};

export default FilmsList;
