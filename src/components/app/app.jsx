import Main from "@components/main/main";

const App = (props) => {
  const {filmsList} = props;

  return (
    <Browser.BrowserRouter>
      <Browser.Switch>
        <Browser.Route exact path="/">
          <Main
            filmsList={filmsList}
          />
        </Browser.Route>
        <Browser.Route exact path="/dev-film">
          test
        </Browser.Route>
      </Browser.Switch>
    </Browser.BrowserRouter>
  );
};

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
        url: PropTypes.string.isRequired,
        runTime: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.exact({
              id: PropTypes.number.isRequired,
              commentAuthor: PropTypes.string.isRequired,
              commentText: PropTypes.string.isRequired,
              commentDate: PropTypes.string.isRequired,
              commentRating: PropTypes.number.isRequired,
            }).isRequired)
          .isRequired})
      .isRequired)
    .isRequired
};

export default App;
