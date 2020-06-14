import Main from "@main/main";
import PropTypes from "prop-types";

const App = (props) => {
  const {filmName, filmNames, filmGenre, filmDate} = props;

  return (
    <Main
      filmName={filmName}
      filmNames={filmNames}
      filmGenre={filmGenre}
      filmDate={filmDate}
    />
  );
};

App.propTypes = {
  filmNames: PropTypes.array.isRequired,
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmDate: PropTypes.string.isRequired,
};

export default App;
