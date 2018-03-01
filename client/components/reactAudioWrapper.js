import React, { Component } from 'react';

import { Play } from './play';
import { Rewind } from './rewind'
import './audioWrapperStyle.scss';
import icons from './assets/index';

export class ReactAudioWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.rewindTimeout = null;
    this.seekingInterval = null;
    this.nameDisplay = null;
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
    this.setOpts = this.setOpts.bind(this);
    this.scrollMarquee = this.scrollMarquee.bind(this);
    this.renderPlayIcon = this.renderPlayIcon.bind(this);
    this.setScrollSize = this.setScrollSize.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
    this.handleRewind = this.handleRewind.bind(this);
  }

  componentDidMount() {
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

  setScrollSize() {
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

  setOpts(settings) {
    let opts = {};
    settings.forEach(setting => {
      opts[setting] = this.props[setting] ?
        this.props[setting]
          :
        this.state[setting];
    })
    return opts;
  }

  startPlay() {
    if (!this.state.playStarted) {
      this.setState({playStarted: true})
    }
  }

  endPlay(e, skipped) {
    clearInterval(this.seekingInterval);
    let endOfTracks = (this.state.currentTrackIdx === this.props.audioFiles.length-1) ?
      true : false;
    let nextTrackIdx = endOfTracks ? 0 : 1;
    if (this.state.loop) {
      nextTrackIdx = this.state.currentTrackIdx;
      endOfTracks = false;
    }
    this.setState({
      currentAudioTime: "0:00",
      seekerVal: "0",
      currentTrackIdx: nextTrackIdx,
      scrollMarquee: false,
      scrollDifference: 0,
      scrollStyle: {
        marginLeft: "0"
      }
    }, () => {
      if(endOfTracks && !skipped && !this.props.loopPlaylist) {
        this.setState({
          playHover: false,
          playing: false})
      }
      else {
        if (this.state.loop) this.audioRef.currentTime = 0;
        if (this.state.playing) this.handlePlay();
      }
      this.setScrollSize();
    });
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
      paused: false,});
    this.handleProgress();
  }

  handlePause() {
    if (this.state.playing) {
      clearInterval(this.seekingInterval);
      this.audioRef.pause();
      this.setState({
        playing: false,
        paused: true});
    }
  }

  handleRewind() {
    let currentTime = this.audioRef.currentTime;
    let prevTrackIdx = (this.state.currentTrackIdx === 0) ?
      this.props.audioFiles.length-1 : this.state.currentTrackIdx - 1;

    if (this.state.recentlyRewound || !currentTime) {
      clearTimeout(this.rewindTimeout);
      this.setState({
        currentAudioTime: "0:00",
        seekerVal: "0",
        currentTrackIdx: prevTrackIdx,
        scrollMarquee: false,
        scrollDifference: 0,
        scrollStyle: {
          marginLeft: "0"
        }
      }, () => {
        if (this.state.playing) this.handlePlay();
        this.setScrollSize();
      });
    } else if (currentTime) {
      this.audioRef.currentTime = 0;
      if (!this.state.playing) {
        this.setState({
          currentAudioTime: "0:00",
          seekerVal: "0",
        });
      }
    }
    this.setState({recentlyRewound: true});
    this.rewindTimeout = setTimeout(() => {
      this.setState({recentlyRewound: false});
    }, 1200);
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

  handleLoop(){
    this.setState({loop: !this.state.loop, loopHover: false})
  }

  loadDuration(){
    let duration = this.secondsToClock(this.audioRef.duration);
    this.setState({duration})
  }

  handleHoverOver(e, type){
    switch (type) {
      case 'play':
        this.setState({playHover: true});
        break;
      case 'mute':
        this.setState({muteHover: true});
        break;
      case 'forward':
        this.setState({forwardHover: true});
        break;
      case 'rewind':
        this.setState({rewindHover: true});
        break;
      case 'loop':
        this.setState({loopHover: true});
        break;
    }
  }

  handleHoverOut(e, type){
    switch (type) {
      case 'play':
        this.setState({playHover: false});
        break;
      case 'mute':
        this.setState({muteHover: false});
        break;
      case 'forward':
        this.setState({forwardHover: false});
        break;
      case 'rewind':
        this.setState({rewindHover: false});
        break;
      case 'loop':
        this.setState({loopHover: false});
        break;
    }
  }

  scrollMarquee(e, direction) {
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

  renderPlayIcon() {
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

  renderMuteIcon() {
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

  render() {
    let title = this.props.audioFiles[this.state.currentTrackIdx].title;
    let artist = this.props.audioFiles[this.state.currentTrackIdx].artist;

    return (
      <div className="audio-player"
        style={{
          fontFamily: this.state.fontFamily,
          fontWeight: this.state.fontWeight,
          color: this.state.fontColor,
          fontSize: this.state.fontSize,
          width: `${this.state.playerWidth}`,
          height: this.state.playerHeight
          }}>
        <audio
          src={this.props.audioFiles[this.state.currentTrackIdx].src}
          ref={(audioRef) => { this.audioRef = audioRef; }}
          onLoadedMetadata={this.loadDuration}
          onPlay={this.startPlay}
          onEnded={this.endPlay}
        />

      {/* Main Controls */}
        <div className="audio-player-controls">
      {/* Play/Pause */}
        <Play 
          playing={this.state.playing}
          handlePause={this.handlePause}
          handlePlay={this.handlePlay}
          handleHoverOver={this.handleHoverOver}
          handleHoverOut={this.handleHoverOut}
          renderPlayIcon={this.renderPlayIcon}
          iconSize={this.state.iconSize}
        />

      {/* Rewind */}
        {this.props.hideRewind ? 
          null
            :
          <Rewind 
            handleHoverOver={this.handleHoverOver}
            handleHoverOut={this.handleHoverOut}
            handleRewind={this.handleRewind}
            rewindHover={this.state.rewindHover}
            rewindHoverIcon={this.state.rewindHoverIcon}
            rewindIcon={this.state.rewindIcon}
            iconSize={this.state.iconSize}
          />
        }

        {/* Skip */}
          {this.props.hideSkip ? 
            null
              :
            <div
              id="forward"
              onMouseOver={e => this.handleHoverOver(e, 'forward')}
              onMouseLeave={e => this.handleHoverOut(e, 'forward')}
              onClick={e => this.endPlay(e, true)}>
              <img src={this.state.forwardHover ? 
                this.state.forwardHoverIcon : this.state.forwardIcon}
                style={{height: this.state.iconSize}}/>
            </div>}

        {/* Loop */}
          {this.props.hideLoop ? 
            null
              :
            <div
              id="loop"
              onMouseOver={e => this.handleHoverOver(e, 'loop')}
              onMouseLeave={e => this.handleHoverOut(e, 'loop')}
              onClick={this.handleLoop}>
              <img src={this.state.loopHover ? 
                this.state.loop ? this.state.loopIcon : this.state.loopEngagedIcon
                 : 
                this.state.loop ? this.state.loopEngagedIcon : this.state.loopIcon}
                style={{height: this.state.iconSize}}/>
            </div>}
        </div>

      {/* Artist/Name */}
        {title ?
          <div className="audio-player-track-name"
            style={this.props.hideSeeking ? {width: "50%"} : null}
            ref={(el) => this.nameDisplay = el }
            onMouseOver={this.state.scrollMarquee ? 
              e => this.scrollMarquee(e, 'left')
                :
              null}
              onMouseOut={this.state.scrollMarquee ? 
                e => this.scrollMarquee(e, 'right')
                  :
                null}>
            <div className="marquee"
              style={this.state.scrollStyle}>
              {artist ? 
                (`${artist} - `)
                  : 
                null
              }
              {title ? 
                (title)
                  :
                null}
            </div>
          </div>
            :
          null
        }

      {/* Seekinging Bar and Duration */}
        {this.props.hideSeeking ? 
          null
            :
          (<div className="audio-player-seeker">
            <input
              className={this.state.sliderClass}
              type="range"
              min="0"
              max="100"
              step="1"
              value={this.state.seekerVal}
              onChange={this.handleSeekSlider}
              onMouseUp={this.handleSeek}
            />
          </div>)
        }
        {this.props.hideTime ?
          null
            :
        (<div className="audio-player-time">
            {`${this.state.currentAudioTime}/${this.state.duration}`}
          </div>)
        }

        {/* volume controls */}
        <div className="audio-player-volume"
          style={this.props.hideSeeking ? {width: "50%"} : null}>
          <div
            id="volume-button"
            onClick={this.handleMute}
            onMouseOver={e => this.handleHoverOver(e, 'mute')}
            onMouseOut={e => this.handleHoverOut(e, 'mute')}>
            <img 
              style={{height: this.state.iconSize}}
              src={this.renderMuteIcon()} />
          </div>
          <input
            className={this.state.sliderClass}
            type="range"
            min="0"
            max="100"
            step="1"
            value={this.state.volume}
            onChange={this.handleVolume}
          />
          </div>
        </div>
    )
  }
}