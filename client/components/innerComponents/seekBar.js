import React from 'react';

const SeekBar = (props) => {
  let {
    sliderClass,
    seekerVal,
    handleSeekSlider,
    handleSeek,
    width
  } = props;

  return (
    <div className="audio-player-seeker"
      style={{width}}
    >
      <div className="slide-container">
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
  </div>
  )
}

export default SeekBar;