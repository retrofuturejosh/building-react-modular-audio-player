import React from 'react';

export const SeekBar = (props) => {
  let {
    sliderClass,
    seekerVal,
    handleSeekSlider,
    handleSeek
  } = props;

  return (
    <div className="audio-player-seeker">
      <input
        className={sliderClass}
        type="range"
        min="0"
        max="100"
        step="1"
        value={seekerVal}
        onChange={handleSeekSlider}
        onMouseUp={handleSeek}
      />
  </div>
  )
}