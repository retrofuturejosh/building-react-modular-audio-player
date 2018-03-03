import React from 'react';

const CustomArrange = (props) => {
  let {
    order,
    setStyle,
    setAudio,
    componentObj
  } = props;
  let componentCheck = {};
  let defaultTierStyle = {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "left",
    alignContent: "left",
    width: "100%"
  };
  let defaultInnerComponentStyle = {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "left",
    width: "100%" 
  };

  let appendStyle = (originalStyle, additions) => {
    let newStyle = Object.assign({}, originalStyle)
    if (additions) {
      Object.keys(additions).forEach(styleElement => {
        newStyle[styleElement] = additions[styleElement]
      })
    }
    return newStyle;
  }

  return (
    <div 
      className="audio-player"
      style={setStyle(true)}
    >
      {setAudio()}
      {order.map((tier, idx) => {
        let tierStyle = appendStyle(defaultTierStyle, tier.style)
          return (
          <div 
            className={tier.className}
            style={tierStyle}
            key={`level${idx}`}
          >
            {tier.innerComponents.map((innerComponent, idx) => {
              let type = innerComponent.type;
              let currentStyle = appendStyle(defaultInnerComponentStyle, innerComponent.style)
              if (componentCheck[type]) return null
              componentCheck[type] = true;
              return (
                <div 
                  key={`innerComponent${idx}`}
                  style={currentStyle}
                > 
                  {componentObj[type]()} 
                </div>
              )
            })}
          </div>
          )
        })
      }
    </div>
  )
}

export default CustomArrange;