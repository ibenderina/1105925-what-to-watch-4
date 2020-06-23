import FilmCard from "@components/film-card/film-card";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onClickFilmCard = this.onClickFilmCard.bind(this);
    this.onFilmTitleMouseEnter = this.onFilmTitleMouseEnter.bind(this);
  }

  onFilmTitleMouseEnter(film) {
    return () => {
      this.props.onFilmTitleMouseEnter(film);
    };
  }

  onClickFilmCard(film) {
    return () => {
      this.props.onClickFilmCard(film);
    };
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return <FilmCard
            key={film.id}
            filmTitle={film.title}
            filmImage={film.src}
            onClickFilmCard={this.onClickFilmCard(film)}
            onFilmTitleMouseEnter={this.onFilmTitleMouseEnter(film)}
          />;
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  onClickFilmCard: PropTypes.func.isRequired,
  onFilmTitleMouseEnter: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
        ratingScore: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        videoUrl: PropTypes.string.isRequired,
      })
      .isRequired)
    .isRequired
};

export default FilmsList;
