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
        return <div key={idx}> {componentObj[component]()} </div>
      })}
    </div>    
  )
}

export default CustomArrange;