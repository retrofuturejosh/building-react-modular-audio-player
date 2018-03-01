import React from 'react';

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

export function setStyle() {
  return {
    fontFamily: this.state.fontFamily,
    fontWeight: this.state.fontWeight,
    color: this.state.fontColor,
    fontSize: this.state.fontSize,
    width: `${this.state.playerWidth}`,
    height: this.state.playerHeight
  }
}

export function setAudio() {
  return <audio
    src={this.props.audioFiles[this.state.currentTrackIdx].src}
    ref={(audioRef) => { this.audioRef = audioRef; }}
    onLoadedMetadata={this.loadDuration}
    onPlay={this.startPlay}
    onEnded={this.endPlay}
  />
}