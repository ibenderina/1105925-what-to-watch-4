import Icon from "react-svg-use";
import {ClassName, Tab} from "@consts";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";

const FilmInfo = (props) => {
  const {activeTab, filmId, getFilmById} = props;
  const {id, src, title, genre, date, background, backgroundColor} = getFilmById(filmId);
  const history = useHistory();

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={background} alt={title + ` background`}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{date}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${id}`)}>
                <Icon id={`play-s`} width={19} height={19}/>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <Icon id={`add`} width={19} height={20}/>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={src} alt={title + ` poster`} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className={`movie-nav__item ` + (activeTab === Tab.OVERVIEW ? ClassName.ACTIVE_TAB : ``)}
                  onClick={props.setActiveTab(Tab.OVERVIEW)}>
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className={`movie-nav__item ` + (activeTab === Tab.DETAILS ? ClassName.ACTIVE_TAB : ``)}
                  onClick={props.setActiveTab(Tab.DETAILS)}>
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className={`movie-nav__item ` + (activeTab === Tab.REVIEWS ? ClassName.ACTIVE_TAB : ``)}
                  onClick={props.setActiveTab(Tab.REVIEWS)}>
                  <Link to={{pathname: `/films/${id}/review`}} className="movie-nav__link">Reviews</Link>
                </li>
              </ul>
            </nav>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

FilmInfo.propTypes = {
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.oneOfType(
      [
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]
  ).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  filmId: PropTypes.string.isRequired,
  getFilmById: PropTypes.func.isRequired,
};

export default FilmInfo;
