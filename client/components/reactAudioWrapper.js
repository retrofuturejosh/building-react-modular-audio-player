import React, { Component } from 'react';

//Dumb Components
import { Play, Rewind, Forward, Loop, Name, SeekBar, Time, Volume } from './innerComponents/index'

//functions
import functions from './functions/index';

//initial state
import { default as initialState } from './initialState'

//style Sheet
import './audioWrapperStyle.scss';

export class ReactAudioWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = initialState;
    this.rewindTimeout = null;
    this.seekingInterval = null;
    this.nameDisplay = null;

    //binding functions
    this.mountComponent = functions.mountComponent.bind(this);
    this.setScrollSize = functions.setScrollSize.bind(this);
    this.setNameDisplayRef = functions.setNameDisplayRef.bind(this);
    this.setOpts = functions.setOpts.bind(this);
    this.startPlay = functions.startPlay.bind(this);
    this.endPlay = functions.endPlay.bind(this);
    this.handlePlay = functions.handlePlay.bind(this);
    this.handlePause = functions.handlePause.bind(this);
    this.handleProgress = functions.handleProgress.bind(this);
    this.handleSeekSlider = functions.handleSeekSlider.bind(this);
    this.handleSeek = functions.handleSeek.bind(this);
    this.setTime = functions.setTime.bind(this);
    this.secondsToClock = functions.secondsToClock.bind(this);
    this.loadDuration = functions.loadDuration.bind(this);
    this.handleVolume = functions.handleVolume.bind(this);
    this.handleMute = functions.handleMute.bind(this);
    this.handleRewind = functions.handleRewind.bind(this);
    this.handleHoverOver = functions.handleHoverOver.bind(this);
    this.handleHoverOut = functions.handleHoverOut.bind(this);
    this.scrollMarquee = functions.scrollMarquee.bind(this);
    this.renderPlayIcon = functions.renderPlayIcon.bind(this);
    this.renderMuteIcon = functions.renderMuteIcon.bind(this);
    this.handleLoop = functions.handleLoop.bind(this);
  }

  componentDidMount() {
    this.mountComponent();
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

        {/* Forward */}
          {this.props.hideForward ? 
            null
              :
            <Forward 
              handleHoverOver={this.handleHoverOver}
              handleHoverOut={this.handleHoverOut}
              endPlay={this.endPlay}
              forwardHover={this.state.forwardHover}
              forwardHoverIcon={this.state.forwardHoverIcon}
              forwardIcon={this.state.forwardIcon}
              iconSize={this.state.iconSize}
            />
          }

        {/* Loop */}
          {this.props.hideLoop ? 
            null
              :
            <Loop 
              handleHoverOver={this.handleHoverOver}
              handleHoverOut={this.handleHoverOut}
              handleLoop={this.handleLoop}
              loopHover={this.state.loopHover}
              loop={this.state.loop}
              loopIcon={this.state.loopIcon}
              loopEngagedIcon={this.state.loopEngagedIcon}
              iconSize={this.state.iconSize}
            />
          }
        </div>

      {/* Track Name and Artist */}
        {title ?
          <Name 
            hideSeeking={this.props.hideSeeking}
            setNameDisplayRef={this.setNameDisplayRef}
            scrollMarquee={this.state.scrollMarquee}
            scrollMarqueeFunc={this.scrollMarquee}
            scrollStyle={this.state.scrollStyle}
            artist={artist}
            title={title}
          />
            :
          null
        }

      {/* Seeking Bar*/}
        {this.props.hideSeeking ? 
          null
            :
          <SeekBar 
            sliderClass={this.state.sliderClass}
            seekerVal={this.state.seekerVal}
            handleSeekSlider={this.handleSeekSlider}
            handleSeek={this.handleSeek}
          />
        }
      
      {/* Current Time / Duration */}
        {this.props.hideTime ?
          null
            :
          <Time
            currentAudioTime={this.state.currentAudioTime}
            duration={this.state.duration}
          />
        }

      {/* volume controls */}
        <Volume 
          hideSeeking={this.props.hideSeeking}
          handleMute={this.handleMute}
          handleHoverOver={this.handleHoverOver}
          handleHoverOut={this.handleHoverOut}
          iconSize={this.state.iconSize}
          renderMuteIcon={this.renderMuteIcon}
          sliderClass={this.state.sliderClass}
          volume={this.state.volume}
          handleVolume={this.handleVolume}
        />
      </div>
    )
  }
}