import React, { Component } from 'react';

export class ReactAudioWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seekerVal: "0",
      volume: "75",
      playing: false
    };
    this.seekingInterval = null;
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleSeekSlider = this.handleSeekSlider.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleSeekDown = this.handleSeekDown.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleProgress = this.handleProgress.bind(this)
  }

  handleProgress() {
    this.seekingInterval = setInterval( () => {
      let currentAudioTime = (this.audioRef.currentTime / this.audioRef.duration) * 100;
      this.setState({seekerVal: currentAudioTime});
      console.log('called');
    }, 500);
    this.audioRef.onended = () => {
      clearInterval(this.seekingInterval);
    };
  }

  handlePlay(e) {
    this.audioRef.play();
    this.setState({playing: true});
    this.handleProgress();
  }

  handlePause(e) {
    this.audioRef.pause();
    this.setState({playing: false})
    clearInterval(this.seekingInterval);
  }

  handleSeekSlider(event) {
    this.setState({seekerVal: event.target.value});
  }

  handleSeek(event){
    let seekTo = this.audioRef.duration * (event.target.value / 100);
    this.audioRef.currentTime = seekTo;
    this.handleProgress();
  }

  handleVolume(event) {
    this.setState({volume: event.target.value});
    this.audioRef.volume = event.target.value / 100;
  }

  handleSeekDown(event) {
    clearInterval(this.seekingInterval);
  }

  render() {

    return (
      <div className="audio-player">
        <audio
          src={this.props.mp3}
          ref={(audioRef) => { this.audioRef = audioRef; }}
        />
        <div
          id="play"
          onClick={this.handlePlay}>
          Play
        </div>
        <div
          id="pause"
          onClick={this.handlePause}>
          Pause
        </div>
        <input
          id="seek-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value={this.state.seekerVal}
          onChange={this.handleSeekSlider}
          onMouseDown={this.handleSeekDown}
          onMouseUp={this.handleSeek}
        />
        <input
          id="volume-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value={this.state.volume}
          onChange={this.handleVolume}
        />
      </div>
    )
  }
}