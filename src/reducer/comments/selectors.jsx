import NameSpace from "@reducer/name-space.jsx";


const getFilmComments = (state, filmId) => {
  return state[NameSpace.COMMENTS][filmId];
};


export {getFilmComments};
