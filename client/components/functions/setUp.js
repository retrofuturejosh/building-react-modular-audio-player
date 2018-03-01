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