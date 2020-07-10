import {ESC} from "@consts";

class VideoFullScreen extends React.Component {
  constructor(props) {
    super(props);
    this._handlerEscClick = this._handlerEscClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._handlerEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this._handlerEscClick);
  }

  _handlerEscClick(evt) {
    if (evt.key === ESC) {
      this.props.history.goBack();
    }
  }

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

VideoFullScreen.propTypes = {
  selectedFilm: PropTypes.func.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
};

export default VideoFullScreen;
