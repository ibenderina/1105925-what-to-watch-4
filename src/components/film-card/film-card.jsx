import VideoPlayer from "@components/video-player/video-player";

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
        isPlayed: true
      });
    }, 1000);
    this.setState({
      timeout
    });
  }

  _handleFilmCardMouseLeave() {
    this.setState({
      isPlayed: false
    });
    clearTimeout(this.state.timeout);
  }

  render() {
    const {filmTitle, filmImage, videoUrl, handleFilmCardClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleFilmCardMouseEnter}
        onMouseLeave={this._handleFilmCardMouseLeave}
        onClick={handleFilmCardClick}>
        <div className="small-movie-card__image">
          <VideoPlayer
            videoUrl={videoUrl}
            filmImage={filmImage}
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
  filmImage: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired,
};

export default FilmCard;
