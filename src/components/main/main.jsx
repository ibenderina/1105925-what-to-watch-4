import FilmsList from "@components/films-list/films-list";
import FilmInfo from "@components/film-info/film-info";
import PromoFilm from "@components/promo-film/promo-film";
import GenresList from "@components/genres-list/genres-list";
import CatalogMore from "@components/catalog-more/catalog-more";
import {setCurrentGenre} from "@reducer";
import {connect} from "react-redux";
import {ClassName} from "@consts";

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

  render() {
    const {filmsList} = this.props;
    const filmSelected = this.state.currentSelectedFilm;
    const promoFilm = filmsList[0];
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
          <section className={this.state.currentSelectedFilm ? ClassName.SIMILAR_FILMS : `catalog`}>

            {this.state.currentSelectedFilm ? <h2 className="catalog__title">More like this</h2> : ``}

            <h2 className="catalog__title visually-hidden">Catalog</h2>

            {this.state.currentSelectedFilm ? `` : <GenresList/>}

            <FilmsList
              films={this.props.filmsList}
              handleFilmCardClick={this._handleFilmCardClick}
            />

            {this.state.currentSelectedFilm ? `` : <CatalogMore/>}
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
};

const mapStateToProps = (state) => {
  return {
    filmsList: state.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentGenre: (genre) => {
      return dispatch(setCurrentGenre(genre));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
