import Main from "@connects/main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import VideoFullScreen from "@components/video-full-screen/video-full-screen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/video/:filmId"
          component={VideoFullScreen}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
