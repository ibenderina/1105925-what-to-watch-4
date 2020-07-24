import * as React from "react";
import Main from "@components/main/main.connect";
import {Router, Switch, Route} from "react-router-dom";
import VideoFullScreen from "@components/video-full-screen/video-full-screen.connect";
import SignIn from "@components/sign-in/sign-in.connect";
import PrivateRoute from "@components/private-route/private-route.connect";
import AddReview from "@components/add-review/add-review.connect";
import {history} from "@root/history";
import MyList from "@components/my-list/my-list.connect";
import {PageRoute} from "@consts";
import withErrorMessage from "@hocs/with-error-message/with-error-message";

const addReviewWithErrorMessage = withErrorMessage(AddReview);

interface Props {
  init: () => void
}

class App extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={PageRoute.INDEX} component={Main}/>
          <Route exact path={PageRoute.LOGIN} component={SignIn}/>
          <PrivateRoute exact path={PageRoute.MY_LIST} component={MyList}/>
          <PrivateRoute exact path={`${PageRoute.REVIEW}/:id`} component={addReviewWithErrorMessage}/>
          <Route exact path={`${PageRoute.FILMS}/:id`} component={Main}/>
          <Route exact path={`${PageRoute.FILMS}/:id${PageRoute.REVIEW}`} component={Main}/>
          <Route exact path={`${PageRoute.PLAYER}/:id`} component={VideoFullScreen}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
