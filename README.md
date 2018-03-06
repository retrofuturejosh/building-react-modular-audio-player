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
import AudioPlayer from 'react-modular-audio-player';

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
| audioFiles | array of objects | no default value | yes | array of audioFile objects following the pattern { src: "/required string pointing to audio file", title: "optional title of track", artist: "optional artist name"} |
| rearrange | array of objects | no default value | no | see more information about rearrange prop below |
| playerWidth | string | "20rem" | no | sets the width of the player, can be set to any acceptable css unit |
| hideSeeking | bool | false | no | prevents the seeking bar from being rendered |
| hideForward | bool | false | no | prevents the skip forward icon from being rendered |
| hideLoop | bool | false | no | prevents the loop current track icon from being rendered |
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
| loopIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the default loop icon |
| loopEngagedIcon | string | included in module | no | accepts a string referencing an img src that will be rendered as the loop icon when looping is engaged or mouse is hovering over default loop icon |
| iconSize | string | "1rem" | no | can be set to any acceptable css unit, icon images' heights are set to size entered, widths are set to auto |
| fontFamily | string | "sans-serif" | no | can be set to any acceptable css font-family, changes font of the scrolling title/artist marquee and time/duration |
| fontWeight | string | "100" | no | can be set to any acceptable css font-weight, changes font-weight of the scrolling title/artist marquee and time/duration |
| fontSize | string | "small" | no | can be set to any acceptable css font-size, changes font-size of the scrolling title/artist marquee and time/duration |
| fontColor | string | "black" | no | can be set to any acceptable css color, changes color of the scrolling title/artist marquee and time/duration fonts |

## Rearrange Prop

The rearrange prop allows you to render subcomponents in any order you wish. It also allows you to build your audioplayer in multiple columns called tiers. 

The rearrange prop allows you to arrange the following subcomponents. All of these subcomponents are referenced by a string name. 

| Name  | Description |
| ---------- | ---------- |
| "play" | renders the play icon |
| "rewind" | renders the rewind/previous icon |
| "forward" | renders the skip/forward icon |
| "loop" | renders the loop icon |
| "name" | renders the scrolling title/artist marquee |
| "time" | renders the current time/duration |
| "seek" | renders the seeking range input |
| "volume" | renders the volume/mute icon and corresponding range input |

The rearrange prop accepts an array of objects, representing tiers. The tier object follows the pattern

```
//Example tier that renders only the play icon and the volume icon/range input
{
  //names the div containing the subcomponents
  className: "First Tier",

  //an optional styling property that appends and rewrites the default styling options for the tier
  //accepts an object with any JSX inline style properties
  style: {marginBottom: "0.3em"}

  //an array of objects arranging desired subcomponents
  innerComponents: [
    {
      //a string, naming the specific subcomponent
      type: "play",

      //an optional styling property
      //appends and rewrites the default styling options for the div containing the subcomponent
      //accepts an object with any JSX inline style properties
      style: {width: "fit-content"}
    },
    {
      type: "volume"
    }
  ]
}
```

Tiers have two default inline style properties, tier and innerComponent. Both of these JSX inline styles can be appended or rewritten with the style properties available within the rearrange prop.

The tier div itself, which contains all the tier's innerComponents, has the following default style
```
defaultTierStyle = {
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "left",
  alignContent: "left",
  width: "100%"
}
```
The innerComponent div, which contains a specific subcomponent, has the following default style
```
defaultInnerComponentStyle = {
  display: "flex", 
  alignItems: "center", 
  justifyContent: "left",
  width: "100%" 
}
```

Below is an example of a custom arranged AudioPlayer with two tiers. The first tier contains the play, rewind, forward, and volume innerComponents. The second tier contains the time and seek innerComponents. It appears like this:
<img src="https://github.com/retrofuturejosh/react_html5_audio_wrapper/blob/master/public/tierExample.png" width="500">

```
let rearrangedPlayer = [
  {
    className: "Top Tier",
    style: {margin: "0.3rem"},
    innerComponents: [
      { 
        type: "play",
        style: {width: "fit-content"}
      },
      {
        type: "rewind",
        style: {width: "fit-content"}
      },
      {
        type: "forward",
        style: {width: "fit-content"}
      },
      {
        type: "volume"
      }
    ]
  },
  {
    className: "Bottom Tier",
    style: {margin: "0rem 0.3rem 0.3rem 0.3rem"},
    innerComponents: [
      {
        type: "time",
        style: {width: "fit-content"}
      },
      {
        type: "seek"
      }
    ]
  }
]

//render
<AudioPlayer
  rearrange={rearrangedPlayer}
  audioFiles={anArrayOfAudioFileObjects}
  playerWidth="10em"
  fontSize="1.5rem"
  iconSize="1.5rem"
/>
```
