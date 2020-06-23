const VideoPlayer = (props) => {
  let {videoUrl} = props;
  const {isPlayed, isMuted, filmImage} = props;

  if (!isPlayed) {
    videoUrl = ``;
  }

  return (
    <video
      autoPlay={true}
      loop={true}
      src={videoUrl}
      poster={filmImage}
      muted={isMuted}
      width="280"
      height="175"
    />
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  filmImage: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlayed: PropTypes.bool.isRequired,
};

export default VideoPlayer;
