import {createSelector} from "reselect";
import NameSpace from "@reducer/name-space.jsx";
import {ALL_GENRES} from "@consts";

const getFilms = (state) => {
  return state[NameSpace.FILMS].films;
};

const getCurrentGenre = (state) => {
  return state[NameSpace.FILMS].currentGenre;
};

const getPromoFilm = (state) => {
  return state[NameSpace.FILMS].promoFilm;
};

const getShowedFilmsCount = (state) => {
  return state[NameSpace.FILMS].showedFilmsCount;
};

const getFilmId = (state, filmId) => {
  return parseInt(filmId, 10);
};

const getFilmsByGenre = createSelector(
    getShowedFilmsCount,
    getCurrentGenre,
    getFilms,
    (showedFilmsCount, currentGenre, films) => {
      if (currentGenre === ALL_GENRES) {
        return films.slice(0, showedFilmsCount);
      }
      return films.filter((film) => {
        return film.genre === currentGenre;
      }).slice(0, showedFilmsCount);
    }
);

const getFilmById = createSelector(
    getFilmId,
    getFilms,
    (filmId, films) => {
      if (filmId) {
        return films.find((film) => {
          return film.id === filmId;
        }) || {};
      }
      return null;
    }
);

const getGenresList = createSelector(
    getFilms,
    (films) => {
      return [...new Set(films.map((film) => {
        return film.genre;
      }))];
    }
);

export {getFilms, getGenresList, getPromoFilm, getFilmsByGenre, getCurrentGenre, getFilmById};
