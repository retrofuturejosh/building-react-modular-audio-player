import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactAudioWrapper } from './components/reactAudioWrapper'

ReactDOM.render(
    <ReactAudioWrapper mp3={"/mp3Example.mp3"}/>,
  document.getElementById('app')
)
