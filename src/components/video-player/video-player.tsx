import * as React from "react";

interface Props {
  url: string
  image: string
  isMuted: boolean
  isPlayed: boolean
}

const VideoPlayer = (props: Props): React.ReactElement => {
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

export default VideoPlayer;
