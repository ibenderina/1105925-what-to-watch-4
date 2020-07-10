import {connect} from "react-redux";
import {getFilmById} from "@reducer/films/selectors";
import VideoFullScreen from "@components/video-full-screen/video-full-screen";

const mapStateToProps = (state) => {
  return {
    selectedFilm: (filmId) => getFilmById(state, filmId),
  };
};

export default connect(mapStateToProps, () => {})(VideoFullScreen);
