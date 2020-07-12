import Main from "@components/main/main.connect";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import VideoFullScreen from "@components/video-full-screen/video-full-screen.connect";
import SignIn from "@components/sign-in/sign-in.connect";

class App extends React.PureComponent {
  componentDidMount() {
    const {checkAuth, loadFilms, loadPromoFilm} = this.props;
    checkAuth();
    loadFilms();
    loadPromoFilm();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/login" component={SignIn}/>
          <Route exact path="/mylist"/>
          <Route exact path="/films/:id" component={Main}/>
          <Route exact path="/films/:id/review" component={Main}/>
          <Route exact path="/player/:id" component={VideoFullScreen}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
};

export default App;
