import FilmCard from "@components/film-card/film-card";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return <FilmCard
            key={film.id}
            url={film.url}
            filmTitle={film.title}
            image={film.src}
            handleFilmCardClick={() => this.props.handleFilmCardClick(film)}
          />;
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  handleFilmCardClick: PropTypes.func.isRequired,
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
        url: PropTypes.string.isRequired,
        runTime: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.exact({
              id: PropTypes.number.isRequired,
              commentAuthor: PropTypes.string.isRequired,
              commentText: PropTypes.string.isRequired,
              commentDate: PropTypes.string.isRequired,
              commentRating: PropTypes.number.isRequired,
            }).isRequired)
          .isRequired
      })
      .isRequired)
    .isRequired
};

export default FilmsList;
