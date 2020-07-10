import FilmInfoOverview from "@components/film-info-overview/film-info-overview.connect";
import FilmInfoDetails from "@components/film-info-details/film-info-details.connect";
import FilmInfoReviews from "@components/film-info-reviews/film-info-reviews.connect";
import {Tab} from "@consts";

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
        this.setState({
          activeTab: tab
        });
      };
    }

    _changeActiveTab() {
      switch (this.state.activeTab) {
        case Tab.OVERVIEW:
          return <FilmInfoOverview {...this.props} />;
        case Tab.DETAILS:
          return <FilmInfoDetails {...this.props} />;
        case Tab.REVIEWS:
          return <FilmInfoReviews {...this.props} />;
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
          {this._changeActiveTab()}
        </Component>
      );
    }
  }

  return WithTabs;
};


export default withTabs;
