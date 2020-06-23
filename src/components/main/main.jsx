import FilmsList from "@components/films-list/films-list";
import FilmInfo from "@components/film-info/film-info";
import PromoFilm from "@components/promo-film/promo-film";

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSelectedFilm: null,
    };
    this._onClickFilmCard = this._onClickFilmCard.bind(this);
    this._onFilmTitleMouseEnter = this._onFilmTitleMouseEnter.bind(this);
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

            <ul className="catalog__genres-list">
              <li className="catalog__genres-item catalog__genres-item--active">
                <a href="#" className="catalog__genres-link">All genres</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Comedies</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Crime</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Documentary</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Dramas</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Horror</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Kids & Family</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Romance</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Sci-Fi</a>
              </li>
              <li className="catalog__genres-item">
                <a href="#" className="catalog__genres-link">Thrillers</a>
              </li>
            </ul>

            <FilmsList
              films={filmsList}
              onClickFilmCard={this._onClickFilmCard}
              onFilmTitleMouseEnter={this._onFilmTitleMouseEnter}
            />

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
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

  _onClickFilmCard(newSelectedFilm) {
    this.setState({
      currentSelectedFilm: newSelectedFilm
    });
  }

  _onFilmTitleMouseEnter() {
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
