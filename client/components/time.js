import React from 'react';

export const Time = (props) => {
  let {
    currentAudioTime,
    duration
  } = props;

  return (
    <div className="audio-player-time">
      {`${currentAudioTime}/${duration}`}
    </div>
  )
}