import React from 'react';

const ColorBox = function(props) {
  return (
    <div>
       {props.title}
       {props.color}
    </div>
  )
}

export default ColorBox;