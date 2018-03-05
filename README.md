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
| playerWidth | string | "20rem" | no | sets the width of the player, can be set to any acceptable css unit |
| hideSeeking | bool | false | no | prevents the seeking bar from being rendered |
| hideForward | bool | false | no | prevents the skip forward icon from being rendered |
| hideLoop | bool | false | no | prevents the loop current track icon being rendered |
| hideRewind | bool | false | no | prevents the rewind/previous icon from being rendered |
| hideTime | bool | false | no | prevents the current time/duration from being rendered|
| hideName | bool | false | no | prevents the scrolling marquee that displays track name and artist from being rendered |
| loopPlaylist | bool | false | no | causes the playlist to continue playing again after the last track finishes |
| sliderClass | string | "slider" | no | sets the className of the volume and seeking input range elements for easier css styling |
| playIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default initial play icon |
| playHoverIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the play icon when mouse is hovering, note: enter the same string as playIcon if you don't want the icon to change when hovering |
| pauseIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default pause icon |
| pauseHoverIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the pause icon when mouse is hovering, note: enter the same string as pauseIcon if you don't want the icon to change when hovering |
| forwardIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default forward icon |
| forwardHoverIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the forward icon when mouse is hovering, note: enter the same string as forwardIcon if you don't want the icon to change when hovering |
| rewindIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default rewind icon |
| rewindHoverIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the rewind icon when mouse is hovering, note: enter the same string as rewindIcon if you don't want the icon to change when hovering |
| volumeIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default volume icon when track is not playing |
| volumeEngagedIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the volume icon when track is playing, note: enter the same string as volumeIcon if you don't want the icon to change when track is playing|
| muteIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default mute icon when track is not playing |
| muteEngagedIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the mute icon when track is playing, note: enter the same string as muteIcon if you don't want the icon to change when track is playing |
| iconSize | string | "1rem" | no | can be set to any acceptable css unit, icon images' heights are set to size entered, widths are set to auto |
| fontFamily | string | "sans-serif" | no | can be set to any acceptable css font-family, changes font of the scrolling title/artist marquee and time/duration |
| fontWeight | string | "100" | can be set to any acceptable css font-weight, changes font-weight of the scrolling title/artist marquee and time/duration |
| fontSize | string | "small" | can be set to any acceptable css font-size, changes font-size of the scrolling title/artist marquee and time/duration |
| fontColor | string | "black" | can be set to any acceptable css color, changes color of the scrolling title/artist marquee and time/duration fonts |