import React from 'react';

const Time = (props) => {
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

export default Time;