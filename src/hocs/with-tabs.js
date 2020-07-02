import FilmInfoOverview from "@components/film-info-overview/film-info-overview";
import FilmInfoDetails from "@components/film-info-details/film-info-details";
import {ClassName, Tab} from "@consts";
import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews";

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: Tab.OVERVIEW
      };
      this._setActiveTab = this._setActiveTab.bind(this);
    }

    _setActiveTab(tab) {
      return (evt) => {
        evt.preventDefault();
        const activeClass = document.querySelectorAll(`.movie-nav__item--active`);
        activeClass.forEach((item) => {
          item.classList.remove(ClassName.ACTIVE_TAB);
        });
        evt.target.closest(`.movie-nav__item`).classList.add(ClassName.ACTIVE_TAB);
        this.setState({
          activeTab: tab
        });
      };
    }

    _changeActiveTab(film) {
      switch (this.state.activeTab) {
        case Tab.OVERVIEW:
          return <FilmInfoOverview film={film} />;
        case Tab.DETAILS:
          return <FilmInfoDetails film={film} />;
        case Tab.REVIEWS:
          return <FilmInfoReviews comments={film.comments} />;
      }
      return ``;
    }

    render() {
      return (
        <Component
          setActiveTab={this._setActiveTab}
          {...this.props}
        >
          {this._changeActiveTab(this.props.film)}
        </Component>
      );
    }
  }

  WithTabs.propTypes = {
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
    })
  };

  return WithTabs;
};


export default withTabs;
