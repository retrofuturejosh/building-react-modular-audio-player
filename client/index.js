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
    src: "/mp3Example.mp3",
    title: "Maiiiii Headdddd",
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
