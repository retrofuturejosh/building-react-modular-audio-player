import React from 'react';

export const Rewind = (props) => {
  let {
    handleHoverOver,
    handleHoverOut,
    iconSize,
    endPlay,
    forwardHover,
    forwardIcon,
    forwardHoverIcon
  } = props;

  return (
    <div
      id="forward"
      onMouseOver={e => handleHoverOver(e, 'forward')}
      onMouseLeave={e => handleHoverOut(e, 'forward')}
      onClick={e => endPlay(e, true)}
    >
      <img src={forwardHover ? 
        forwardHoverIcon : forwardIcon}
        style={{height: iconSize}}/>
    </div>
  )
}


