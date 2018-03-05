# React Custom Audio Player


## CURRENTLY UNDER CONSTRUCTION!!!!!!

This is the react audio player solution you've been looking for! It looks great with almost no learning curve, and setup is fast 'n easy. If you want more options, it's highly customizable and easily styled.


## Features

* Single component, ready for use instantly
* Customizable, modular, and styleable
* Add your own icons/buttons, change the order, decide which subcomponents/buttons are rendered


## Setup

Only required prop is an ARRAY of audioFile OBJECTs, which follows the pattern
```
[{ src: "/linkToAudioFile",
  title: "Toxic",
  artist: "Britney Spears" }]
```

Within the audioFile object, only src is required, title and artist are optional. If you only want to include a single piece of text as the name, set it as the title with no artist.

### Below is a simple example.

```
import AudioPlayer from 'react-custom-audio-player';

let playlist = [
  { src="/music.mp3",
    title="Song",
    artist="Singer" },
  { src="/moreMusic.mp3"
    title="Only A Single Name" },
  { src="/musicWithNoTitleorArtist.mp3" }
];

//inside render() function
<AudioPlayer 
  audioFiles={playlist}
/>
```

## Acceptable Props

| Prop Name  | Value Type | Default Value | isRequired | Explanation |
| ---------- | ---------- | ------------- | ---------- | ----------- |
| audioFiles | array of objects | no default value | yes | array of audioFile objects following the pattern { src: "required string pointing to audio file", title: "optional title of track", artist:"optional artist name"} |
| hideSeeking | bool | false | no | prevents the seeking bar from being rendered |
| hideForward | bool | false | no | hides the skip forward icon |
| hideLoop | bool | false | no | hides the loop current track icon |
| hideRewind | bool | false | no | hides the rewind/previous icon |
| hideTime | bool | false | no | hides the current time/duration |
| hideName | bool | false | no | hides the scrolling marquee that displays track name and artist |
| iconSize | string | "1rem" | no | icon images' heights are set to size entered, widths are set to auto, prop can be set to any acceptable css unit |
