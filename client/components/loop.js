import React from 'react';

export const Loop = (props) => {
  let {
    handleHoverOver,
    handleHoverOut,
    iconSize,
    handleLoop,
    loopIcon,
    loopEngagedIcon,
    loopHover,
    loop
  } = props;

  return (
    <div
      id="loop"
      onMouseOver={e => handleHoverOver(e, 'loop')}
      onMouseLeave={e => handleHoverOut(e, 'loop')}
      onClick={handleLoop}
    >
      <img src={loopHover ? 
        loop ? loopIcon : loopEngagedIcon
          : 
        loop ? loopEngagedIcon : loopIcon}
        style={{height: iconSize}}
      />
    </div>
  )
}




