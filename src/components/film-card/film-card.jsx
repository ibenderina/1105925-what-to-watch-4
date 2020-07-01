import VideoPlayer from "@components/video-player/video-player";
import {TIMEOUT} from "@consts";

class FilmCard extends React.PureComponent {
  constructor() {
    super();
    this._handleFilmCardMouseEnter = this._handleFilmCardMouseEnter.bind(this);
    this._handleFilmCardMouseLeave = this._handleFilmCardMouseLeave.bind(this);

    this.state = {
      timeout: null,
      isPlayed: false
    };
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
    const {filmTitle, image, url, handleFilmCardClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleFilmCardMouseEnter}
        onMouseLeave={this._handleFilmCardMouseLeave}
        onClick={handleFilmCardClick}>
        <div className="small-movie-card__image">
          <VideoPlayer
            url={url}
            image={image}
            isMuted={true}
            isPlayed={this.state.isPlayed}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{filmTitle}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired,
};

export default FilmCard;
