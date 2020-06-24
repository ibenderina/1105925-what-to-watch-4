import FilmsList from "@components/films-list/films-list";
import FilmInfo from "@components/film-info/film-info";
import PromoFilm from "@components/promo-film/promo-film";
import GenresList from "@components/genres-list/genres-list";
import CatalogMore from "@components/catalog-more/catalog-more";

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSelectedFilm: null,
    };
    this._handleFilmCardClick = this._handleFilmCardClick.bind(this);
  }

  _getFilmsList() {
    if (this.state.currentSelectedFilm) {
      return this.props.filmsList.filter((film) => {
        return film.genre === this.state.currentSelectedFilm.genre;
      }).slice(0, 4);
    }
    return this.props.filmsList;
  }

  _handleFilmCardClick(newSelectedFilm) {
    this.setState({
      currentSelectedFilm: newSelectedFilm,
    });
  }

  render() {
    const {filmsList} = this.props;
    const filmSelected = this.state.currentSelectedFilm;
    const promoFilm = filmsList[1];
    let shownFilm = null;

    if (filmSelected) {
      shownFilm = (
        <FilmInfo
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
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            {this.state.currentSelectedFilm ? `` : <GenresList/>}

            <FilmsList
              films={this._getFilmsList()}
              handleFilmCardClick={this._handleFilmCardClick}
            />

            {this.state.currentSelectedFilm ? `` : <CatalogMore/>}
          </section>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.string.isRequired,
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
        videoUrl: PropTypes.string.isRequired,
      })
      .isRequired)
    .isRequired,
};

export default Main;
