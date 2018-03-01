import React from 'react';

const Name = (props) => {
  let {
    hideSeeking,
    setNameDisplayRef,
    scrollMarquee,
    scrollMarqueeFunc,
    scrollStyle,
    artist,
    title  
  } = props;

  return (
    <div className="audio-player-track-name"
      style={hideSeeking ? {width: "50%"} : null}
      ref={setNameDisplayRef}
      onMouseOver={scrollMarquee ? 
        e => scrollMarqueeFunc(e, 'left')
          :
        null}
      onMouseOut={scrollMarquee ? 
        e => scrollMarqueeFunc(e, 'right')
          :
        null}>
      <div className="marquee"
        style={scrollStyle}
      >
        {artist ? 
          (`${artist} - `)
            : 
          null
        }
        {title ? 
          (title)
            :
          null}
    </div>
  </div>
  )
}

export default Name;