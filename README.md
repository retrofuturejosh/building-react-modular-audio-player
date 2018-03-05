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
| hideForward | bool | false | no | prevents the skip forward icon from being rendered |
| hideLoop | bool | false | no | prevents the loop current track icon being rendered |
| hideRewind | bool | false | no | prevents the rewind/previous icon from being rendered |
| hideTime | bool | false | no | prevents the current time/duration from being rendered|
| hideName | bool | false | no | prevents the scrolling marquee that displays track name and artist from being rendered |
| loopPlaylist | bool | false | no | causes the playlist to continue playing again after the last track finishes |
| sliderClass | string | "slider" | no | sets the className of the volume and seeking input range elements for easier css styling |
| playIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default initial play button |
| playEngagedIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the play button when mouse is hovering, note: enter the same string as playIcon if you don't want the icon to change when hovering |
| pauseIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default pause button when track is not playing |
| pauseEngagedIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the pause button when mouse is hovering, note: enter the same string as playIcon if you don't want the icon to change when hovering |
| iconSize | string | "1rem" | no | iconSize can be set to any acceptable css unit, icon images' heights are set to size entered, widths are set to auto |

