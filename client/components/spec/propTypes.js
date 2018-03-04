import PropTypes from 'prop-types';

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
  rearrange: PropTypes.arrayOf(PropTypes.shape({
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
  }))
}