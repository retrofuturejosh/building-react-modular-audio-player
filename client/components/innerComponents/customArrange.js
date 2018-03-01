import React from 'react';

const CustomArrange = (props) => {
  let {
    order,
    setStyle,
    setAudio,
    componentObj
  } = props;
  let componentCheck = {};

  return (
    <div className="audio-player"
      style={setStyle()}>
      {setAudio()}
      {order.map((component, idx) => {
        if (componentCheck[component]) return null
        componentCheck[component] = true;
        let position = 'middle';
        if (!idx) position = 'first';
        if (idx === order.length-1) position = 'last';
        return <div key={idx}> {componentObj[component](position)} </div>
      })}
    </div>    
  )
}

export default CustomArrange;