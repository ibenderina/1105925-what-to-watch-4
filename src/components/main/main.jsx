import FilmsList from "@components/films-list/films-list";
import FilmInfo from "@components/film-info/film-info.connect";
import PromoFilm from "@components/promo-film/promo-film.connect";
import GenresList from "@components/genres-list/genres-list.connect";
import ShowMore from "@components/show-more/show-more";
import {ClassName} from "@consts";
import withTabs from "@hocs/with-tabs";
import PageHeaderLogo from "@components/page-header-logo/page-header-logo";

const FilmInfoWithTabs = withTabs(FilmInfo);

class Main extends React.Component {
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
    const {getFilmsList, showMore, isShowMore} = this.props;
    const filmsList = getFilmsList(filmId);
    const shownFilm = filmId ? <FilmInfoWithTabs filmId={filmId}/> : <PromoFilm/>;

    return (
      <>
        {shownFilm}
        <section className="page-content">
          <section className={filmId ? ClassName.SIMILAR_FILMS : `catalog`}>
            {filmId ? <h2 className="catalog__title">More like this</h2> : ``}
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            {filmId ? `` : <GenresList/>}
            <FilmsList films={filmsList}/>
            {filmId || !isShowMore ? `` : <ShowMore handleShowButtonClick={showMore}/>}
          </section>
        </section>
        <footer className="page-footer">
          <PageHeaderLogo/>
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
  getFilmsList: PropTypes.func.isRequired,
  isShowMore: PropTypes.bool.isRequired,
  showMore: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  }).isRequired,
};

export default Main;
