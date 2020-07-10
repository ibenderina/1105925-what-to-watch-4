import FilmInfoOverview from "@components/film-info-overview/film-info-overview";
import FilmInfoDetails from "@components/film-info-details/film-info-details";
import {Tab} from "@consts";
import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews";
import {Film, FilmComment} from "@api/adapter";

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentFilmId: props.film.id,
        activeTab: Tab.OVERVIEW
      };
      this._setActiveTab = this._setActiveTab.bind(this);
    }

    _setActiveTab(tab) {
      return (evt) => {
        evt.preventDefault();
        this.setState({
          activeTab: tab
        });
      };
    }

    _changeActiveTab(film, comments) {
      if (film.id !== this.state.currentFilmId) {
        this.setState({
          currentFilmId: film.id,
          activeTab: Tab.OVERVIEW
        });
      }
      switch (this.state.activeTab) {
        case Tab.OVERVIEW:
          return <FilmInfoOverview film={film} />;
        case Tab.DETAILS:
          return <FilmInfoDetails film={film} />;
        case Tab.REVIEWS:
          return <FilmInfoReviews comments={comments} />;
      }
      return ``;
    }

    render() {
      return (
        <Component
          setActiveTab={this._setActiveTab}
          activeTab={this.state.activeTab}
          {...this.props}
        >
          {this._changeActiveTab(this.props.film, this.props.comments)}
        </Component>
      );
    }
  }

  WithTabs.propTypes = {
    film: PropTypes.instanceOf(Film),
    comments: PropTypes.arrayOf(PropTypes.instanceOf(FilmComment)).isRequired,
  };

  return WithTabs;
};


export default withTabs;
