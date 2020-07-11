import Main from "@components/main/main.connect";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import VideoFullScreen from "@components/video-full-screen/video-full-screen.connect";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login"/>
        <Route exact path="/mylist"/>
        <Route exact path="/films/:id" component={Main}/>
        <Route exact path="/films/:id/review" component={Main}/>
        <Route exact path="/player/:id" component={VideoFullScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
