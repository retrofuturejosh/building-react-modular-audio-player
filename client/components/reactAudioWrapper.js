import React, { Component } from 'react';

export class ReactAudioWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seekerVal: "0"
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleSeekSlider = this.handleSeekSlider.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
  }

  handlePlay(e) {
    this.audioRef.play();
  }

  handlePause(e) {
    this.audioRef.pause();
  }

  handleSeekSlider(event) {
    this.setState({seekerVal: event.target.value});
  }

  handleSeek(event){
    let seekTo = this.audioRef.duration * (event.target.value / 100);
    this.audioRef.currentTime = seekTo;
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
          id="slide-seeker"
          type="range"
          min="0"
          max="100"
          value={this.state.seekerVal}
          step="1"
          onChange={this.handleSeekSlider}
          onMouseUp={this.handleSeek}
        />
      </div>
    )
  }
}