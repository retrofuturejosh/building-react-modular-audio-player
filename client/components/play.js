import React from 'react';

export const Play = (props) => {
  let {
    playing,
    handlePause,
    handlePlay,
    handleHoverOver,
    handleHoverOut,
    iconSize,
    renderPlayIcon
  } = props;
  return (
    <div
      id="play"
      onClick={playing ? handlePause : handlePlay}
      onMouseOver={e => handleHoverOver(e, 'play')}
      onMouseLeave={e => handleHoverOut(e, 'play')}>
      <img 
        style={{height: iconSize}}
        src={renderPlayIcon()}/>
    </div>
  )
}
