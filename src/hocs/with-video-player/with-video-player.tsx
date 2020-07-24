import * as React from "react";
import {TIMEOUT} from "@consts";
import VideoPlayer from "@components/video-player/video-player";
import {Subtract} from "utility-types";

interface Props {
  image: string
  url: string
}

interface State {
  timeout: NodeJS.Timeout,
  isPlayed: boolean,
}

const withVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, Props>;

  class WithVideoPlayer extends React.PureComponent<T, State> {
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

  return WithVideoPlayer;
};

export default withVideoPlayer;
