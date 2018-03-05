import PropTypes from 'prop-types';

//shorten PropTypes
let str = PropTypes.string;
let bool = PropTypes.bool;
let requiredFunc = PropTypes.func.isRequired

//for more than one component
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
let handleHoverOut = requiredFunc;
let handleHoverOver = requiredFunc;
let playIcon = str;
let playHoverIcon = str;
let pauseIcon = str;
let pauseHoverIcon = str;
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
  playHoverIcon,
  pauseIcon,
  pauseHoverIcon,
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
  iconSize,
  sliderClass,
  playerWidth,
  hideSeeking,
  fontFamily: str,
  fontSize: str,
  fontColor: str,
  fontWeight: str,
  hideForward: bool,
  hideLoop: bool,
  loopPlaylist: bool,
  hideRewind: bool,
  hideTime: bool,
  hideName: bool,
  rearrange: rearrangeProps
};

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
};

export const forwardPropTypes = {
  handleHoverOver,
  handleHoverOut,
  endPlay: requiredFunc,
  forwardHover: bool.isRequired,
  forwardIcon,
  forwardHoverIcon,
  iconSize
};

export const loopPropTypes = {
  handleHoverOver,
  handleHoverOut,
  iconSize,
  handleLoop: requiredFunc,
  loopIcon,
  loopEngagedIcon,
  loopHover: bool.isRequired,
  loop: bool.isRequired
};

export const namePropTypes = {
  hideSeeking,
  setNameDisplayRef: requiredFunc,
  scrollMarquee: bool.isRequired,
  scrollMarqueeFunc: requiredFunc,
  scrollStyle: PropTypes.object,
  artist: str,
  title: str,
  width: str
};

export const playPropTypes = {
  playing: bool.isRequired,
  handlePause: requiredFunc,
  handlePlay: requiredFunc,
  handleHoverOver,
  handleHoverOut,
  iconSize,
  renderPlayIcon: requiredFunc
};

export const rewindPropTypes = {
  handleHoverOut,
  handleHoverOver,
  handleRewind: requiredFunc,
  rewindHover: bool.isRequired,
  rewindHoverIcon,
  rewindIcon,
  iconSize
};

export const seekBarPropTypes = {
  sliderClass,
  seekerVal: str.isRequired,
  handleSeekSlider: requiredFunc,
  handleSeek: requiredFunc,
  width: str.isRequired
};

export const timePropTypes = {
  currentAudioTime: str.isRequired,
  duration: str.isRequired
};

export const volumePropTypes = {
  hideSeeking,
  handleMute: requiredFunc,
  handleHoverOver,
  handleHoverOut,
  iconSize,
  renderMuteIcon: requiredFunc,
  sliderClass: str.isRequired,
  volume: str.isRequired,
  handleVolume: requiredFunc,
  width: str.isRequired
};