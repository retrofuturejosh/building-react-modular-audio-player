import React from 'react';

//prop types
import { loopPropTypes } from '../spec/propTypes'

const Loop = (props) => {
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

Loop.propTypes = loopPropTypes;

export default Loop;