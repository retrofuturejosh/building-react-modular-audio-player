import React, { Component } from 'react';

export class ReactAudioWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seekerVal: "0"
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleSeeker = this.handleSeeker.bind(this);
  }

  handlePlay(e) {
    this.audioRef.play();
  }

  handlePause(e) {
    this.audioRef.pause();
  }

  handleSeeker(e) {
    this.setState({seekerVal: event.target.value});
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
          onChange={this.handleSeeker}
        >
        </input>
      </div>
    )
  }
}