import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "@components/main/main";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _renderActiveFilm() {
    const {filmName, filmGenre, filmDate, filmsList} = this.props;

    return (
      <Main
        filmName={filmName}
        filmGenre={filmGenre}
        filmDate={filmDate}
        filmsList={filmsList}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderActiveFilm()}
          </Route>
          <Route exact path="/dev-film">
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  filmsList: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
        ratingScore: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        videoUrl: PropTypes.string.isRequired,
      })
      .isRequired)
    .isRequired,
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.string.isRequired,
};

export default App;
