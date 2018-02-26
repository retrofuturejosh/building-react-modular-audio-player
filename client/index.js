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
    artist: "Kimmi Moooooooooooooooooooooore",
    title: "One Night"
  }
]

ReactDOM.render(
    <ReactAudioWrapper
      audioFiles={audioFiles}
      // playIcon="/play-light.png"
      // playEngagedIcon="/play-dark.png"
      // pauseIcon="/pause-light.png"
      // pauseEngagedIcon="pause-dark.png"
      // volumeIcon="/volume.png"
      // muteIcon="/mute.png"
      // muteEngagedIcon="/mute-dark.png"
      // volumeEngagedIcon="/volume-dark.png"
      // forwardIcon="/forward-ref.png"
      // forwardHoverIcon="/forward-hover-ref.png"
      // fontFamily="serif"
      // fontSize="larger"
      // fontColor="red"
      // fontWeight="bolder"
      // iconSize="1em"
      // sliderClass="my-slider"
      // playerWidth="30rem"
      // hideSeeking={true}
      // hideSkip={true}
      // hideLoop={false}
      loopPlaylist={true}
      />,
  document.getElementById('app')
)
