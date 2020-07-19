import {useHistory} from "react-router";
import UserBlock from "@components/user-block/user-block.connect";
import PageHeaderLogo from "@components/page-header-logo/page-header-logo";
import MyListButton from "@components/my-list-button/mi-list-button.connect";
import {Film} from "@api/adapter";
import {PageRoute} from "@consts";

const PromoFilm = (props) => {
  const {id, title, src, genre, date, background, backgroundColor, isFavorite} = props.film;
  const history = useHistory();

  return (
    <section className="movie-card" style={{backgroundColor}}>
      <div className="movie-card__bg">
        <img src={background} alt={title + ` background`}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <PageHeaderLogo/>
        <UserBlock/>
      </header>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={src} alt={title + ` poster`} width="218" height="327"/>
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{date}</span>
            </p>
            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`${PageRoute.PLAYER}/${id}`)}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <MyListButton filmId={id} isFavorite={isFavorite} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilm.propTypes = {
  film: PropTypes.instanceOf(Film).isRequired,
};

export default PromoFilm;

