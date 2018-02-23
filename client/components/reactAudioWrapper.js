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
    };
    this.seekingInterval = null;
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleSeekSlider = this.handleSeekSlider.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleMute = this.handleMute.bind(this);
  }

  handleProgress() {
    if (this.seekingInterval) {
      clearInterval(this.seekingInterval);
    }
    this.seekingInterval = setInterval( () => {
      console.log('called');
      let currentAudioTime = (this.audioRef.currentTime / this.audioRef.duration) * 100;
      this.setState({seekerVal: currentAudioTime});
    }, 500);
    this.audioRef.onended = () => {
      clearInterval(this.seekingInterval);
    };
  }

  handlePlay() {
    this.audioRef.play();
    this.setState({playing: true});
    this.handleProgress();
  }

  handlePause() {
    clearInterval(this.seekingInterval);
    this.audioRef.pause();
    this.setState({playing: false})
  }

  handleSeekSlider(event) {
    clearInterval(this.seekingInterval);
    this.setState({seekerVal: event.target.value});
  }

  handleSeek(event){
    let seekTo = this.audioRef.duration * (event.target.value / 100);
    this.audioRef.currentTime = seekTo;
    this.handleProgress();
  }

  handleVolume(event, muting) {
    if (event) {
      this.setState({volume: event.target.value});
      this.audioRef.volume = event.target.value / 100;
    } else if (muting) {
      this.audioRef.muted = true;
      this.setState({volumePreMute: this.state.volume, volume: "0"})
    } else  {
      this.setState({volume: this.state.volumePreMute})
      this.audioRef.muted = false;
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

  render() {

    return (
      <div className="audio-player">
        <div className="audio-player-top">
          <audio
            src={this.props.mp3}
            ref={(audioRef) => { this.audioRef = audioRef; }}
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
        <div audio-player-bottom>
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
        </div>
      </div>
    )
  }
}