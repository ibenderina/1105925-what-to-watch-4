const VideoPlayer = (props) => {
  let {url} = props;
  const {isPlayed, isMuted, image} = props;

  if (!isPlayed) {
    url = ``;
  }

  return (
    <video
      autoPlay={true}
      loop={true}
      src={url}
      poster={image}
      muted={isMuted}
      width="280"
      height="175"
    />
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlayed: PropTypes.bool.isRequired,
};

export default VideoPlayer;
