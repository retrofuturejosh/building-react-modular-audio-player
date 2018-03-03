import React from 'react';

const CustomArrange = (props) => {
  let {
    order,
    setStyle,
    setAudio,
    componentObj
  } = props;
  let componentCheck = {};
  let tier = false;
  if(Array.isArray(order[0])) tier = true;

  return (
    <div className="audio-player"
      style={setStyle(tier)}>
      {setAudio()}
      {order.map((component, idx) => {
        if (Array.isArray(component)) {
          return (
          <div 
            className={`level${idx}`}
            style={{
              display: "flex", 
              flexDirection: "row", 
              justifyContent: "left",
              alignContent: "left",
              width: "100%",}}
            key={`level${idx}`}
          >
            {component.map((innerComponent, idx) => {
              if (componentCheck[innerComponent]) return null
              componentCheck[innerComponent] = true;
              let maxWidth= "100%";
              if(innerComponent === 'name') maxWidth = "50%"
              return (
                <div 
                  key={idx}
                  style={{
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "left",
                  maxWidth }}
                > 
                  {componentObj[innerComponent]()} 
                </div>
              )
            })}
          </div>)
        }
        if (componentCheck[component]) return null
        componentCheck[component] = true;
        return <div key={idx}> {componentObj[component]()} </div>
      })}
    </div>    
  )
}

export default CustomArrange;