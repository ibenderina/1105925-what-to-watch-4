import Main from "@components/main/main";

const App = () => {
  return (
    <Browser.BrowserRouter>
      <Browser.Switch>
        <Browser.Route exact path="/">
          <Main/>
        </Browser.Route>
        <Browser.Route exact path="/dev-film">
          test
        </Browser.Route>
      </Browser.Switch>
    </Browser.BrowserRouter>
  );
};

export default App;
