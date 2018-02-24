import React from 'react';
import ReactDOM from 'react-dom';
import { ReactAudioWrapper } from './components/reactAudioWrapper'

ReactDOM.render(
    <ReactAudioWrapper
      mp3="/mp3Example.mp3"
      // name="My Head"
      // artist="Kimmi Moore"
      // playIcon="/play-light.png"
      // playEngagedIcon="/play-dark.png"
      // pauseIcon="/pause-light.png"
      // pauseEngagedIcon="pause-dark.png"
      // volumeIcon="/volume.png"
      // muteIcon="/mute.png"
      // muteEngagedIcon="/mute-dark.png"
      // unMuteIcon="/volume-dark.png"
      // fontFamily="serif"
      // fontSize="larger"
      // fontColor="red"
      // fontWeight="bolder"
      // sliderClass="my-slider"
      // playerWidth="20em"
      // playerHeight="2em"
      // hideSeeking={true}
      />,
  document.getElementById('app')
)
