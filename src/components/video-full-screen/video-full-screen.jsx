import {fetchFilm} from "@mocks/films";
import {ESC} from "@consts";

class VideoFullScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: null,
      isLoading: true
    };

    this._handlerEscClick = this._handlerEscClick.bind(this);
  }

  componentDidMount() {
    const filmId = this.props.match.params.filmId;
    if (filmId) {
      fetchFilm(parseInt(filmId, 10)).then((film) => {
        this.setState({
          film,
          isLoading: false
        });
      });
    }

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
    const film = this.state.film;
    if (this.state.isLoading) {
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
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      filmId: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
};

export default VideoFullScreen;
