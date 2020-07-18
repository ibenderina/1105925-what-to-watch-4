import Main from "@components/main/main.connect";
import {Router, Switch, Route} from "react-router-dom";
import VideoFullScreen from "@components/video-full-screen/video-full-screen.connect";
import SignIn from "@components/sign-in/sign-in.connect";
import PrivateRoute from "@components/private-route/private-route.connect";
import AddReview from "@components/add-review/add-review.connect";
import {history} from "../../history";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/login" component={SignIn}/>
          <PrivateRoute exact path="/mylist"/>
          <PrivateRoute exact path="/review/:id" component={AddReview}/>
          <Route exact path="/films/:id" component={Main}/>
          <Route exact path="/films/:id/review" component={Main}/>
          <Route exact path="/player/:id" component={VideoFullScreen}/>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired,
};

export default App;
