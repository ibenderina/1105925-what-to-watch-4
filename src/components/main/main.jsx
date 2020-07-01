import FilmsList from "@components/films-list/films-list";
import FilmInfo from "@components/film-info/film-info";
import PromoFilm from "@components/promo-film/promo-film";
import GenresList from "@components/genres-list/genres-list";
import ShowMore from "@components/show-more/show-more";
import {ClassName} from "@consts";
import withTabs from "@hocs/with-tabs";

const FilmInfoWithTabs = withTabs(FilmInfo);

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSelectedFilm: null,
    };
    this._handleFilmCardClick = this._handleFilmCardClick.bind(this);
  }

  _handleFilmCardClick(newSelectedFilm) {
    this.setState({
      currentSelectedFilm: newSelectedFilm,
    });
    if (this.state.currentSelectedFilm) {
      this.props.setCurrentGenre(this.state.currentSelectedFilm.genre);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.filmsList.length && nextProps.isMoreFilms) {
      nextProps.setFilms(0, nextProps.currentGenre);
      return false;
    }
    return true;
  }

  render() {
    const {filmsList, promoFilm, currentGenre} = this.props;
    const filmSelected = this.state.currentSelectedFilm;
    let shownFilm = null;

    if (filmSelected) {
      shownFilm = (
        <FilmInfoWithTabs
          film={filmSelected}
        />
      );
    } else {
      shownFilm = (
        <PromoFilm
          film={promoFilm}
        />
      );
    }

    return (
      <>
        {shownFilm}

        <section className="page-content">
          <section className={filmSelected ? ClassName.SIMILAR_FILMS : `catalog`}>

            {filmSelected ? <h2 className="catalog__title">More like this</h2> : ``}

            <h2 className="catalog__title visually-hidden">Catalog</h2>

            {filmSelected ? `` : <GenresList/>}

            <FilmsList
              films={filmsList}
              handleFilmCardClick={this._handleFilmCardClick}
            />

            {filmSelected || !this.props.isMoreFilms ? `` : <ShowMore
              handleShowButtonClick={() => {
                this.props.setFilms(filmsList.length, currentGenre);
              }}
            />}

          </section>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </>
    );
  }
}

Main.propTypes = {
  filmsList: PropTypes.arrayOf(
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
          .isRequired})
        .isRequired)
    .isRequired,
  setCurrentGenre: PropTypes.func.isRequired,
  setFilms: PropTypes.func.isRequired,
  isMoreFilms: PropTypes.bool.isRequired,
  promoFilm: PropTypes.object.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

export default Main;
