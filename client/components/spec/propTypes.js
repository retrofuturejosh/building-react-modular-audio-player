import PropTypes from 'prop-types';

const rearrangeProps = PropTypes.arrayOf(PropTypes.shape({
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
  innerComponents: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([
      "name", 
      "play", 
      "rewind", 
      "forward", 
      "loop", 
      "time", 
      "seek", 
      "volume"]),
    style: PropTypes.object
  }))
}));

export const audioPlayerPropTypes = {
  audioFiles: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      artist: PropTypes.string
    })).isRequired,
  playIcon: PropTypes.string,
  playEngagedIcon: PropTypes.string,
  pauseIcon: PropTypes.string,
  pauseEngagedIcon: PropTypes.string,
  volumeIcon: PropTypes.string,
  volumeEngagedIcon: PropTypes.string,
  muteIcon: PropTypes.string,
  muteEngagedIcon: PropTypes.string,
  forwardIcon: PropTypes.string,
  forwardHoverIcon: PropTypes.string,
  rewindIcon: PropTypes.string,
  rewindHoverIcon: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.string,
  iconSize: PropTypes.string,
  sliderClass: PropTypes.string,
  playerWidth: PropTypes.string,
  hideSeeking: PropTypes.bool,
  hideForward: PropTypes.bool,
  hideLoop: PropTypes.bool,
  loopPlaylist: PropTypes.bool,
  hideRewind: PropTypes.bool,
  hideTime: PropTypes.bool,
  hideName: PropTypes.bool,
  rearrange: rearrangeProps
}

export const customArrangePropTypes = {
  order: rearrangeProps,
  setStyle: PropTypes.func,
  setAudio: PropTypes.func,
  componentObj: PropTypes.shape({
    play: PropTypes.func.isRequired,
    rewind: PropTypes.func.isRequired,
    forward: PropTypes.func.isRequired,
    loop: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    time: PropTypes.func.isRequired,
    volume: PropTypes.func.isRequired,
  })
}

export const forwardPropTypes = {
  handleHoverOver: PropTypes.func.isRequired,
  handleHoverOut: PropTypes.func.isRequired,
  endPlay: PropTypes.func.isRequired,
  forwardHover: PropTypes.bool.isRequired,
  forwardIcon: PropTypes.string,
  forwardHoverIcon: PropTypes.string,
  iconSize: PropTypes.string
}