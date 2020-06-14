import Main from "@main/main";

const App = (props) => {
  const {filmName, filmGenre, filmDate, filmNames} = props;

  return (
    <Main
      filmName={filmName}
      filmGenre={filmGenre}
      filmDate={filmDate}
      filmNames={filmNames}
      onFilmTitleClick={() => {}}
    />
  );
};

App.propTypes = {
  filmNames: PropTypes.arrayOf(PropTypes.string.isRequired),
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.string.isRequired,
};

export default App;
