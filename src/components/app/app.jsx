import Main from "@components/main/main";

const App = (props) => {
  const {filmName, filmGenre, filmDate, filmsList} = props;

  return (
    <Main
      filmName={filmName}
      filmGenre={filmGenre}
      filmDate={filmDate}
      filmsList={filmsList}
    />
  );
};

App.propTypes = {
  filmsList: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
      .isRequired)
    .isRequired,
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.string.isRequired,
};

export default App;
