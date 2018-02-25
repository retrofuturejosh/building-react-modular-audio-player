import React from 'react';
import ReactDOM from 'react-dom';
import { ReactAudioWrapper } from './components/reactAudioWrapper'

const audioFiles = [
  {
    src: "/My Head.mp3",
    title: "My Head",
    artist: "Kimmi Moore"
  },
  {
    src: "/One Night.mp3",
    title: "One Night",
    artist: "Kimmi Moorrrrrrrre"
  }
]

ReactDOM.render(
    <ReactAudioWrapper
      audioFiles={audioFiles}
            // audioFile="/My Head.mp3"
            // name="My Head"
            // artist="Kimmi Moore"
      // playIcon="/play-light.png"
      // playEngagedIcon="/play-dark.png"
      // pauseIcon="/pause-light.png"
      // pauseEngagedIcon="pause-dark.png"
      // volumeIcon="/volume.png"
      // muteIcon="/mute.png"
      // muteEngagedIcon="/mute-dark.png"
      // volumeEngagedIcon="/volume-dark.png"
      // fontFamily="serif"
      // fontSize="larger"
      // fontColor="red"
      // fontWeight="bolder"
      // iconSize="1em"
      // sliderClass="my-slider"
      playerWidth="30rem"
      // hideSeeking={true}
      hideSkip={true}
      />,
  document.getElementById('app')
)
