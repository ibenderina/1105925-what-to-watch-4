import * as React from "react";
import {ESC} from "@consts";
import {Film} from "@api/adapter";

interface Props {
  selectedFilm: (filmId: string) => Film
  history: {
    goBack: () => void,
  }
  match: {
    params: {
      id: string
    }
  }
}

class VideoFullScreen extends React.Component<Props> {

  componentDidMount() {
    document.addEventListener(`keydown`, this._handlerEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._handlerEscClick);
  }

  _handlerEscClick = (evt) => {
    if (evt.key === ESC) {
      this.props.history.goBack();
    }
  };

  render() {
    const filmId = this.props.match.params.id;
    const film = this.props.selectedFilm(filmId);
    if (!film) {
      return (
        <h2>Loading...</h2>
      );
    }
    return (<>
      <div className="player">
        <video
          className="player__video"
          autoPlay={true}
          loop={true}
          src={film.url}
          poster={film.src}
          muted={false}
          controls={true}
        />
        <button type="button" className="player__exit" onClick={() => {
          this.props.history.goBack();
        }}>Exit</button>
      </div>
      </>
    );
  }
}

export default VideoFullScreen;
