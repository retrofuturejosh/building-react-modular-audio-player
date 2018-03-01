//Icons
import icons from '../assets/index';

export function mountComponent() {
  let opts = this.setOpts([
    'playIcon',
    'playEngagedIcon',
    'pauseIcon',
    'pauseEngagedIcon',
    'volumeIcon',
    'volumeEngagedIcon',
    'muteIcon',
    'muteEngagedIcon',
    'forwardIcon',
    'forwardHoverIcon',
    'rewindIcon',
    'rewindHoverIcon',
    'loopIcon',
    'loopEngagedIcon',
    'fontFamily',
    'fontWeight',
    'fontSize',
    'fontColor',
    'sliderClass',
    'playerWidth',
    'iconSize'
  ]);
  this.setState(opts, () => {
    this.setScrollSize();
  });
}

export function setOpts(settings) {
  let opts = {};
  settings.forEach(setting => {
    opts[setting] = this.props[setting] ?
      this.props[setting]
        :
      this.state[setting];
  })
  return opts;
}
  
export function setScrollSize() {
  setTimeout(() => {
      window.requestAnimationFrame(() => {
        let marqueeWidth = this.nameDisplay.scrollWidth;
        let nameDisplayWidth = this.nameDisplay.offsetWidth;
        if(marqueeWidth > nameDisplayWidth) {
          let scrollTime = Math.round((marqueeWidth / nameDisplayWidth) * 1.7);
          let difference = marqueeWidth - nameDisplayWidth;
          this.setState({scrollMarquee: true, scrollDifference: difference, scrollTime});
        }
      })
  }, 0);
}

export function setNameDisplayRef(el) {
  this.nameDisplay = el 
}

export const initialState = {
  currentTrackIdx: 0,
  seekerVal: "0",
  volume: "75",
  playing: false,
  paused: false,
  muted: false,
  volumePreMute: "75",
  duration: "0:00",
  currentAudioTime: "0:00",
  recentlyRewound: false,
  loaded: false,
  loop: false,
  playHover: false,
  playStarted: false,
  muteHover: false,
  forwardHover: false,
  rewindHover: false,
  loopHover: false,
  playIcon: icons.playIcon,
  playEngagedIcon: icons.playEngagedIcon,
  pauseIcon: icons.pauseIcon,
  pauseEngagedIcon: icons.pauseEngagedIcon,
  volumeIcon: icons.volumeIcon,
  volumeEngagedIcon: icons.volumeEngaged,
  muteIcon: icons.muteIcon,
  muteEngagedIcon: icons.muteEngagedIcon,
  forwardIcon: icons.forwardIcon,
  forwardHoverIcon: icons.forwardHoverIcon,
  rewindIcon: icons.rewindIcon,
  rewindHoverIcon: icons.rewindHoverIcon,
  loopIcon: icons.loopIcon,
  loopEngagedIcon: icons.loopEngagedIcon,
  sliderClass: "slider",
  fontFamily: "sans-serif",
  fontWeight: "100",
  fontSize: "small",
  fontColor: "black",
  playerWidth: "20rem",
  iconSize: "1rem",
  hideSeeking: false,
  scrollMarquee: false,
  scrollDifference: 0,
  scrollTime: 0,
  scrollStyle: {
    marginLeft: "0"
  }
};