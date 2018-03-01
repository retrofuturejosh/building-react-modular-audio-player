import React from 'react';

export const Rewind = (props) => {
  let {
    handleHoverOver,
    handleHoverOut,
    handleRewind,
    rewindHover,
    rewindHoverIcon,
    rewindIcon,
    iconSize
  } = props;

  return (
    <div
      id="rewind"
      onMouseOver={e => handleHoverOver(e, 'rewind')}
      onMouseLeave={e => handleHoverOut(e, 'rewind')}
      onClick={handleRewind}
      >
      <img src={rewindHover ? 
        rewindHoverIcon : rewindIcon}
        style={{height: iconSize}}/>
    </div>
  )
}