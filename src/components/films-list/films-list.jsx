import {PureComponent} from "react";
import FilmCard from "@components/film-card/film-card";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmCard: null,
    };
  }

  onFilmTitleMouseEnter(activeFilmId) {
    this.setState(() => {
      return {
        activeFilmCard: activeFilmId,
      };
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return <FilmCard key={film.id} filmTitle={film.title} filmImage={film.src} onFilmTitleClick={() => {}} onFilmTitleMouseEnter={this.onFilmTitleMouseEnter.bind(this, film.id)}/>;
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
      .isRequired)
    .isRequired
};

export default FilmsList;
