export function scrollMarquee(e, direction) {
  if(direction === "left") {
    this.setState({scrollStyle: {
      marginLeft: -this.state.scrollDifference,
      transition: `all ${this.state.scrollTime}s ease-in`
    }})
  } else {
    this.setState({scrollStyle: {
    marginLeft: "0",
    transition: "all 0.3s ease-in"
  }})
  }
}

export function renderPlayIcon() {
  if(this.state.playStarted){
    if(this.state.playHover) {
      //play has started, hovering, playing
      if(this.state.playing) return this.state.pauseEngagedIcon;
      //play has started, hovering, paused
      else return this.state.playEngagedIcon;
    } else {
      //play has started, NOT hovering, playing
      if(this.state.playing) return this.state.pauseIcon;
      //play has started, NOT hovering, paused
      else return this.state.playIcon;
    }
  } else {
    //play has NOT started, hovering
    if(this.state.playHover) return this.state.playEngagedIcon;
    //play has NOT started, NOT hovering
    else return this.state.playIcon;
  }
}

export function renderMuteIcon() {
  if (this.state.muted) {
    if (this.state.muteHover) {
      //muted, hovering, playing
      if(this.state.playing) return this.state.volumeEngagedIcon;
      //muted, hovering, paused
      else return this.state.volumeIcon
    }
    //muted, NOT hovering, playing
    if (this.state.playing) return this.state.muteEngagedIcon;
    //muted, NOT hovering, playing
    else return this.state.muteIcon;
  }
  else {
    if(this.state.muteHover) {
      //NOT muted, hovering, playing
      if(this.state.playing) return this.state.muteEngagedIcon;
      //NOT muted, hovering, paused
      else return this.state.muteIcon;
    }
    //NOT muted, NOT hovering, playing
    else if (this.state.playing) return this.state.volumeEngagedIcon
    //NOT muted, NOT hovering, paused
    else return this.state.volumeIcon;
  }
}

export function marginPositions(position) {
  let style = {};
  if(position === 'first') style = {marginLeft: "0"};
  if(position === 'last') style={marginRight: "0"};
  return style;
}