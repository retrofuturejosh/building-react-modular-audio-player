import React from 'react';
import ReactDOM from 'react-dom';
import { ReactAudioWrapper } from './components/reactAudioWrapper'

ReactDOM.render(
    <ReactAudioWrapper
      audioFile="/My Head.mp3"
      name="My Head"
      artist="Kimmi Moore"
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
      // iconSize="1em"
      // sliderClass="my-slider"
      playerWidth="30rem"
      // hideSeeking={true}
      />,
  document.getElementById('app')
)
