import React from 'react';

const Volume = (props) => {
  let {
    hideSeeking,
    handleMute,
    handleHoverOver,
    handleHoverOut,
    iconSize,
    renderMuteIcon,
    sliderClass,
    volume,
    handleVolume,
    width
  } = props;

  return (
    <div className="audio-player-volume"
      style={{width}}
    >
      <div
        id="volume-button"
        onClick={handleMute}
        onMouseOver={e => handleHoverOver(e, 'mute')}
        onMouseOut={e => handleHoverOut(e, 'mute')}
      >
        <img 
          style={{height: iconSize}}
          src={renderMuteIcon()}
        />
      </div>
      <div className="slide-container">
        <input
          className={sliderClass}
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  )
}

export default Volume;