import React from 'react';

export const Volume = (props) => {
  let {
    hideSeeking,
    handleMute,
    handleHoverOver,
    handleHoverOut,
    iconSize,
    renderMuteIcon,
    sliderClass,
    volume,
    handleVolume
  } = props;

  return (
    <div className="audio-player-volume"
      style={hideSeeking ? {width: "50%"} : null}
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
  )
}



