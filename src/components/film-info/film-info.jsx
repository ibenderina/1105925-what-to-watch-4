import Icon from "react-svg-use";
import FilmInfoOverview from "@components/film-info-overview/film-info-overview";
import FilmInfoDetails from "@components/film-info-details/film-info-details";
import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews";

class FilmInfo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: `overview`
    };
  }

  _setActiveTab(tab) {
    return (evt) => {
      evt.preventDefault();
      const activeClass = document.querySelectorAll(`.movie-nav__item--active`);
      activeClass.forEach((item) => {
        item.classList.remove(`movie-nav__item--active`);
      });
      evt.target.closest(`.movie-nav__item`).classList.add(`movie-nav__item--active`);
      this.setState({
        activeTab: tab
      });
    };
  }

  _changeActiveTab() {
    switch (this.state.activeTab) {
      case `overview`:
        return <FilmInfoOverview
          film={this.props.film}
        />;
      case `details`:
        return <FilmInfoDetails
          film={this.props.film}
        />;
      case `reviews`:
        return <FilmInfoReviews
          film={this.props.film}
        />;
    }
    return ``;
  }

  render() {
    const {src, title, genre, date, background} = this.props.film;

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
                    onClick={this._setActiveTab(`overview`)}>
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item"
                    onClick={this._setActiveTab(`details`)}>
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item"
                    onClick={this._setActiveTab(`reviews`)}>
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>


              {this._changeActiveTab()}


            </div>
          </div>
        </div>
      </section>
    );
  }
}

FilmInfo.propTypes = {
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
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmInfo;
