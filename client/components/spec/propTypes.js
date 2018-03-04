import PropTypes from 'prop-types';

let rearrangeProps = PropTypes.arrayOf(PropTypes.shape({
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

let str = PropTypes.string;
let bool = PropTypes.bool;
let requiredFunc = PropTypes.func.isRequired

let handleHoverOut = requiredFunc;
let handleHoverOver = requiredFunc;
let playIcon = str;
let playEngagedIcon = str;
let pauseIcon = str;
let pauseEngagedIcon = str;
let volumeIcon = str;
let volumeEngagedIcon = str;
let muteIcon = str;
let muteEngagedIcon = str;
let forwardIcon = str;
let forwardHoverIcon = str;
let rewindIcon = str;
let rewindHoverIcon = str;
let loopIcon = str;
let loopEngagedIcon = str;
let fontFamily = str;
let fontSize = str;
let fontColor = str;
let fontWeight = str;
let iconSize = str;
let sliderClass = str;
let playerWidth = str;
let hideSeeking = bool;

export const audioPlayerPropTypes = {
  audioFiles: PropTypes.arrayOf(PropTypes.shape({
      src: str.isRequired,
      title: str,
      artist: str
    })).isRequired,
  playIcon,
  playEngagedIcon,
  pauseIcon,
  pauseEngagedIcon,
  volumeIcon,
  volumeEngagedIcon,
  muteIcon,
  muteEngagedIcon,
  forwardIcon,
  forwardHoverIcon,
  rewindIcon,
  rewindHoverIcon,
  loopIcon,
  loopEngagedIcon,
  fontFamily,
  fontSize,
  fontColor,
  fontWeight,
  iconSize,
  sliderClass,
  playerWidth,
  hideSeeking,
  hideForward: bool,
  hideLoop: bool,
  loopPlaylist: bool,
  hideRewind: bool,
  hideTime: bool,
  hideName: bool,
  rearrange: rearrangeProps
}

export const customArrangePropTypes = {
  order: rearrangeProps,
  setStyle: requiredFunc,
  setAudio: requiredFunc,
  componentObj: PropTypes.shape({
    play: requiredFunc,
    rewind: requiredFunc,
    forward: requiredFunc,
    loop: requiredFunc,
    name: requiredFunc,
    time: requiredFunc,
    volume: requiredFunc,
  })
}

export const forwardPropTypes = {
  handleHoverOver,
  handleHoverOut,
  endPlay: requiredFunc,
  forwardHover: bool.isRequired,
  forwardIcon,
  forwardHoverIcon,
  iconSize
}

export const loopPropTypes = {
  handleHoverOver,
  handleHoverOut,
  iconSize,
  handleLoop: requiredFunc,
  loopIcon,
  loopEngagedIcon,
  loopHover: bool.isRequired,
  loop: bool.isRequired
}

export const namePropTypes = {
  hideSeeking,
  setNameDisplayRef: requiredFunc,
  scrollMarquee: bool.isRequired,
  scrollMarqueeFunc: requiredFunc,
  scrollStyle: PropTypes.object,
  artist: str,
  title: str,
  width: str
}

export const playPropTypes = {
  playing: bool.isRequired,
  handlePause: requiredFunc,
  handlePlay: requiredFunc,
  handleHoverOver,
  handleHoverOut,
  iconSize,
  renderPlayIcon: requiredFunc
}

export const rewindPropTypes = {
  handleHoverOut,
  handleHoverOver,
  handleRewind: requiredFunc,
  rewindHover: bool.isRequired,
  rewindHoverIcon,
  rewindIcon,
  iconSize
}

export const seekBarPropTypes = {
  sliderClass,
  seekerVal: str.isRequired,
  handleSeekSlider: requiredFunc,
  handleSeek: requiredFunc,
  width: str.isRequired
}