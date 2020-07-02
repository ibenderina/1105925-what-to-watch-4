import Icon from "react-svg-use";
import {Tab} from "@consts";

const FilmInfo = (props) => {
  const {src, title, genre, date, background} = props.film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={background} alt={title + ` background`}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
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
              <button className="btn btn--play movie-card__button" type="button">
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
                <li className="movie-nav__item movie-nav__item--active"
                  onClick={props.setActiveTab(Tab.OVERVIEW)}>
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item"
                  onClick={props.setActiveTab(Tab.DETAILS)}>
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item"
                  onClick={props.setActiveTab(Tab.REVIEWS)}>
                  <a href="#" className="movie-nav__link">Reviews</a>
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
  children: PropTypes.oneOfType(
      [
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]
  ).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  film: PropTypes.exact({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
  })};

export default FilmInfo;
