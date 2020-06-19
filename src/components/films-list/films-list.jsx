import FilmCard from "@components/film-card/film-card";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onClickFilmCard = this.onClickFilmCard.bind(this);
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
          />;
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  onClickFilmCard: PropTypes.func.isRequired,
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
      })
      .isRequired)
    .isRequired
};

export default FilmsList;
