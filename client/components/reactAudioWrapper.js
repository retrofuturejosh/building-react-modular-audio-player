import React, { Component } from 'react';
import './audioWrapperStyle.scss';
import icons from './assets/index';

export class ReactAudioWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seekerVal: "0",
      volume: "75",
      playing: false,
      paused: false,
      muted: false,
      volumePreMute: "75",
      duration: "0:00",
      currentAudioTime: "0:00",
      loaded: false,
      playHover: false,
      pauseHover: false,
      playStarted: false,
      muteHover: false,
      playIcon: icons.playIcon,
      playEngagedIcon: icons.playEngagedIcon,
      pauseIcon: icons.pauseIcon,
      pauseEngagedIcon: icons.pauseEngagedIcon,
      volumeIcon: icons.volumeIcon,
      muteIcon: icons.muteIcon,
      muteEngagedIcon: icons.muteEngagedIcon,
      unMuteIcon: icons.unMuteIcon
    };
    this.seekingInterval = null;
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleSeekSlider = this.handleSeekSlider.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.setTime = this.setTime.bind(this);
    this.loadDuration = this.loadDuration.bind(this);
    this.handleHoverOver = this.handleHoverOver.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);
    this.startPlay = this.startPlay.bind(this);
    this.endPlay = this.endPlay.bind(this);
    this.setIcons = this.setIcons.bind(this);
  }

  componentDidMount() {
    let icons = this.setIcons([
      'playIcon',
      'playEngagedIcon',
      'pauseIcon',
      'pauseEngagedIcon',
      'volumeIcon',
      'muteIcon',
      'muteEngagedIcon',
      'unMuteIcon'
    ]);
    this.setState(icons);
  }

  setIcons(icons) {
    let returnIcons = {};
    icons.forEach(icon => {
      returnIcons[icon] = this.props[icon] ?
        this.props[icon]
          :
        this.state[icon];
    })
    return returnIcons;
  }

  startPlay() {
    if (!this.state.playStarted) {
      this.setState({playStarted: true})
    }
  }

  endPlay() {
    clearInterval(this.seekingInterval);
    this.setState({
      playing: false,
      playHover: false,
      playStarted: false,
      currentAudioTime: "0:00",
      seekerVal: "0"
    })
  }

  handleProgress() {
    if (this.seekingInterval) {
      clearInterval(this.seekingInterval);
    }
    this.seekingInterval = setInterval( () => {
      this.setTime();
      let currentAudioTime = (this.audioRef.currentTime / this.audioRef.duration) * 100;
      this.setState({seekerVal: currentAudioTime});
    }, 500);
  }

  setTime(seekTo){
    let time;
    if (seekTo || seekTo === 0) {
      time = seekTo;
    } else {
      time = this.audioRef.currentTime;
    }
    let currentAudioTime = this.secondsToClock(time);
    this.setState({ currentAudioTime });
  }

  secondsToClock(time){
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
  }

  handlePlay() {
    this.audioRef.play();
    this.setState({
      playing: true,
      paused: false,
      pauseHover: false});
    this.handleProgress();
  }

  handlePause() {
    if (this.state.playing) {
      clearInterval(this.seekingInterval);
      this.audioRef.pause();
      this.setState({
        playing: false,
        paused: true,
        playHover: false,
        pauseHover: true})
    } else if (this.state.playStarted){
      this.handlePlay();
      this.setState({
        playing: true,
        paused: false,
        playHover: true})
    }
  }

  handleSeekSlider(event) {
    let seekTo = this.audioRef.duration * (event.target.value / 100);
    clearInterval(this.seekingInterval);
    this.setTime(seekTo);
    this.setState({seekerVal: event.target.value});
  }

  handleSeek(event){
    let seekTo = this.audioRef.duration * (event.target.value / 100);
    this.audioRef.currentTime = seekTo;
    if (this.state.playing) {
      this.handleProgress();
    }
  }

  handleVolume(event, muting) {
    //when handleVolume is called from range onChange
    if (event) {
      //for pure volume sliding
      let newVolume = (event.target.value < 1) ? 0 : event.target.value
      this.setState({volume: newVolume});
      this.audioRef.volume = newVolume / 100;

      //set state.mute to true if sliding to less than 1
      if (newVolume < 1) {
        this.setState({muted: true});
      } else if (this.state.muted) {
      //set state.mute to false if sliding up input from  mute
        this.setState({muted: false})
      }

    //when calling function from handleMute()
    } else if (muting) {
      //when muting, move volume slider to 0 and set volume to 0
      this.setState({volumePreMute: this.state.volume, volume: "0"})
      this.audioRef.volume = 0;
    } else  {
      //when unmuting, return volume and slider to previous position before mute
      this.setState({volume: this.state.volumePreMute})
      this.audioRef.volume = this.state.volumePreMute / 100;
    }
  }


  handleMute(event) {
    if (!this.state.muted) {
      this.handleVolume(null, true);
    } else {
      this.handleVolume(null, false);
    }
    this.setState({muted: !this.state.muted});
  }

  loadDuration(){
    let duration = this.secondsToClock(this.audioRef.duration);
    this.setState({duration})
  }

  handleHoverOver(e, type){
    if (type === 'play') this.setState({playHover: true});
    if (type === 'pause' && this.state.playStarted) this.setState({pauseHover: true});
    if (type === 'mute') this.setState({muteHover: true})
  }

  handleHoverOut(e, type){
    if (type === 'play' && !this.state.playing) this.setState({playHover: false});
    if (type === 'pause' && !this.state.paused) this.setState({pauseHover: false});
    if (type === 'mute') this.setState({muteHover: false})
  }

  render() {

    return (
      <div className="audio-player">
        <div className="audio-player-top">
          <audio
            src={this.props.mp3}
            ref={(audioRef) => { this.audioRef = audioRef; }}
            onLoadedMetadata={this.loadDuration}
            onPlay={this.startPlay}
            onEnded={this.endPlay}
          />
          <div
            id="play"
            onClick={this.handlePlay}
            onMouseOver={e => this.handleHoverOver(e, 'play')}
            onMouseLeave={e => this.handleHoverOut(e, 'play')}>
            <img src={this.state.playHover ? this.state.playEngagedIcon : this.state.playIcon}/>
          </div>
          <div
            id="pause"
            onClick={this.handlePause}
            onMouseOver={e => this.handleHoverOver(e, 'pause')}
            onMouseLeave={e => this.handleHoverOut(e, 'pause')}>
            <img src={this.state.pauseHover ? this.state.pauseEngagedIcon : this.state.pauseIcon}/>
          </div>
          <div
            id="volume"
            onClick={this.handleMute}
            onMouseOver={e => this.handleHoverOver(e, 'mute')}
            onMouseOut={e => this.handleHoverOut(e, 'mute')}>
            {this.state.muted ? 
              (
                <img src={this.state.muteHover ? this.state.unMuteIcon : this.state.muteEngagedIcon}/>
              )
              :
              (
                <img src={this.state.muteHover ? this.state.muteIcon : this.state.volumeIcon}/>
              )
            }
          </div>
          <input
            className="slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={this.state.volume}
            onChange={this.handleVolume}
          />
        </div>
        <div className="audio-player-bottom">
          <div className="current-time">
            {this.state.currentAudioTime}
          </div>
          <input
            className="slider"
            type="range"
            min="0"
            max="100"
            step="1"
            value={this.state.seekerVal}
            onChange={this.handleSeekSlider}
            onMouseUp={this.handleSeek}
          />
        <div className="duration">
          {this.state.duration}
        </div>
        </div>
      </div>
    )
  }
}