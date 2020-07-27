import * as React from "react";
import {Tab} from "@consts";
import {ConnectedComponent} from "react-redux";

interface Props {
  filmId: string
}

interface State {
  activeTab: Tab
}

const withTabs = (Component, activeTab: Tab, tabs: Object) => {
  class WithTabs extends React.PureComponent<Props, State> {
    state = {
      activeTab: activeTab
    };

    _setActiveTab = (tab: Tab) => {
      return (evt) => {
        evt.preventDefault();
        this.setState({
          activeTab: tab
        });
      };
    };

    private _changeActiveTab = (): ConnectedComponent<any, any> => {
      return tabs[this.state.activeTab];
    };

    render = (): React.ReactElement => {
      const T = this._changeActiveTab();
      return (
        <Component
          setActiveTab={this._setActiveTab}
          activeTab={this.state.activeTab}
          {...this.props}
        >
          <T {...this.props}/>
        </Component>
      );
    }
  }

  return WithTabs;
};


export default withTabs;
