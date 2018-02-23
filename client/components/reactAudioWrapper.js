import React, { Component } from 'react';

export class ReactAudioWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seekerVal: "0",
      volume: "75",
      playing: false,
      muted: false,
      volumePreMute: "75",
      duration: "0:00",
      currentAudioTime: "0:00",
      loaded: false
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
    this.audioRef.onended = () => {
      clearInterval(this.seekingInterval);
    };
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
    this.setState({playing: true});
    this.handleProgress();
  }

  handlePause() {
    if (this.state.playing) {
      clearInterval(this.seekingInterval);
      this.audioRef.pause();
      this.setState({playing: false})
    } else {
      this.handlePlay();
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

  render() {

    return (
      <div className="audio-player">
        <div className="audio-player-top">
          <audio
            src={this.props.mp3}
            ref={(audioRef) => { this.audioRef = audioRef; }}
            onLoadedMetadata={this.loadDuration}
          />
          <div
            id="play"
            onClick={this.handlePlay}>
            <img src="/play.png"/>
          </div>
          <div
            id="pause"
            onClick={this.handlePause}>
            <img src="/pause.png"/>
          </div>
          <div
            id="volume"
            onClick={this.handleMute}>
            <img src={this.state.muted ? "/mute.png" : "/volume.png"}/>
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