import Main from "@components/main/main";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/dev-film">
          test
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
