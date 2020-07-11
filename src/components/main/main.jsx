import FilmsList from "@components/films-list/films-list";
import FilmInfo from "@components/film-info/film-info.connect";
import PromoFilm from "@components/promo-film/promo-film.connect";
import GenresList from "@components/genres-list/genres-list.connect";
import ShowMore from "@components/show-more/show-more";
import {ClassName} from "@consts";
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
    const {filmsList, showMore} = this.props;
    const shownFilm = filmId ? <FilmInfoWithTabs filmId={filmId}/> : <PromoFilm/>;

    return (
      <>
        {shownFilm}
        <section className="page-content">
          <section className={filmId ? ClassName.SIMILAR_FILMS : `catalog`}>
            {filmId ? <h2 className="catalog__title">More like this</h2> : ``}
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            {filmId ? `` : <GenresList/>}
            <FilmsList
              films={filmsList}
              handleFilmCardClick={(id) => {
                historyPush(`/films/${id}`);
              }}
            />
            {filmId ? `` : <ShowMore handleShowButtonClick={showMore}/>}
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
}

Main.propTypes = {
  getComments: PropTypes.func.isRequired,
  loadFilmComments: PropTypes.func.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.instanceOf(Film).isRequired).isRequired,
  setCurrentGenre: PropTypes.func.isRequired,
  showMore: PropTypes.func.isRequired,
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
