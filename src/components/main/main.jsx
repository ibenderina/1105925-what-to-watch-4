import FilmsList from "@components/films-list/films-list";
import FilmInfo from "@components/film-info/film-info";
import PromoFilm from "@components/promo-film/promo-film";
import GenresList from "@components/genres-list/genres-list.connect";
import ShowMore from "@components/show-more/show-more";
import {ClassName} from "consts.jsx";
import withTabs from "@hocs/with-tabs";
import {Film} from "@api/adapter";
import {Link} from "react-router-dom";

const FilmInfoWithTabs = withTabs(FilmInfo);

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    const filmId = nextProps.match.params.id;
    if (filmId && !nextProps.getComments(filmId)) {
      nextProps.loadFilmComments(filmId);
      return false;
    }
    return true;
  }

  render() {
    const filmId = this.props.match.params.id;
    const historyPush = this.props.history.push;
    const {filmsList, promoFilm, selectedFilm, isMoreFilms, showMore, getComments} = this.props;
    const filmSelected = selectedFilm(filmId);
    let shownFilm = null;

    if (filmSelected) {
      shownFilm = <FilmInfoWithTabs film={filmSelected} comments={getComments(filmId)}/>;
    } else {
      shownFilm = <PromoFilm film={promoFilm}/>;
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
              handleFilmCardClick={(id) => {
                historyPush(`/films/${id}`);
              }}
            />
            {filmSelected || !isMoreFilms ? `` : <ShowMore handleShowButtonClick={showMore}/>}
          </section>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </>
    );
  }
};

Main.propTypes = {
  getComments: PropTypes.func.isRequired,
  loadFilmComments: PropTypes.func.isRequired,
  selectedFilm: PropTypes.func.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.instanceOf(Film).isRequired).isRequired,
  setCurrentGenre: PropTypes.func.isRequired,
  showMore: PropTypes.func.isRequired,
  isMoreFilms: PropTypes.bool.isRequired,
  promoFilm: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
