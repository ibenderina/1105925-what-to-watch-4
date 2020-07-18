import {TIMEOUT} from "@consts";
import VideoPlayer from "@components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);
      this._handleFilmCardMouseEnter = this._handleFilmCardMouseEnter.bind(this);
      this._handleFilmCardMouseLeave = this._handleFilmCardMouseLeave.bind(this);

      this.state = {
        timeout: null,
        isPlayed: false
      };
    }

    componentWillUnmount() {
      clearTimeout(this.state.timeout);
    }

    _handleFilmCardMouseEnter() {
      const timeout = setTimeout(() => {
        this.setState({
          isPlayed: true,
        });
      }, TIMEOUT);
      this.setState({
        timeout
      });
    }

    _handleFilmCardMouseLeave() {
      this.setState({
        isPlayed: false,
        timeout: null
      });
      clearTimeout(this.state.timeout);
    }

    render() {
      const {image, url} = this.props;

      return (
        <Component
          className="small-movie-card catalog__movies-card"
          onMouseEnter={this._handleFilmCardMouseEnter}
          onMouseLeave={this._handleFilmCardMouseLeave}
          {...this.props}>
          <VideoPlayer
            url={url}
            image={image}
            isMuted={true}
            isPlayed={this.state.isPlayed}
          />
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
