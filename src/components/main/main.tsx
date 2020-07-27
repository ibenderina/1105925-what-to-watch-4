import * as React from "react";
import FilmsList from "@components/films-list/films-list";
import FilmInfo from "@components/film-info/film-info.connect";
import PromoFilm from "@components/promo-film/promo-film.connect";
import GenresList from "@components/genres-list/genres-list.connect";
import ShowMore from "@components/show-more/show-more";
import {ClassName, Tab} from "@consts";
import withTabs from "@hocs/with-tabs/with-tabs";
import PageHeaderLogo from "@components/page-header-logo/page-header-logo";
import {Film, FilmComment} from "@api/adapter";
import FilmInfoOverview from "@components/film-info-overview/film-info-overview.connect";
import FilmInfoDetails from "@components/film-info-details/film-info-details.connect";
import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews.connect";

const FilmInfoWithTabs = withTabs(
  FilmInfo,
  Tab.OVERVIEW,
  {
    [Tab.OVERVIEW]: FilmInfoOverview,
    [Tab.DETAILS]: FilmInfoDetails,
    [Tab.REVIEWS]: FilmInfoReviews,
  });

interface Props {
  getComments: (filmId: string) => FilmComment[]
  loadFilmComments: (filmId: string) => void
  getFilmsList: (genre: string) => Film[]
  isShowMore: boolean
  showMore: () => void
  promoFilm: Film
  match: {
    params: {
      id: string
    }
  }
}

class Main extends React.Component<Props> {
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
          <footer className="page-footer">
            <PageHeaderLogo isLight={true}/>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </section>
      </>
    );
  }
}

export default Main;
