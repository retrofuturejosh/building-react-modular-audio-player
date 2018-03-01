import React from 'react';

import { marginPositions } from '../functions/renderVisualElements'

const Play = (props) => {
  let {
    playing,
    handlePause,
    handlePlay,
    handleHoverOver,
    handleHoverOut,
    iconSize,
    renderPlayIcon,
    position
  } = props;
  let style = marginPositions(position);
  return (
    <div
      style={style}
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

export default Play;