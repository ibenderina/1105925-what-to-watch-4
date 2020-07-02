import {setFilms, setCurrentGenre} from "@reducer";
import {connect} from "react-redux";
import {fetchFilms} from "@mocks/films";

import Main from "@components/main/main";

const mapStateToProps = (state) => {
  return {
    filmsList: state.films,
    isMoreFilms: state.isMoreFilms,
    promoFilm: state.promoFilm,
    currentGenre: state.currentGenre,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentGenre: (genre) => {
      return dispatch(setCurrentGenre(genre));
    },
    setFilms: (filmsCount, currentGenre) => {
      fetchFilms({offset: filmsCount, genre: currentGenre}).then((filmsList) => {
        return dispatch(setFilms(filmsList));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
