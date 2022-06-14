import React from 'react';
import styled form 'styled-componenets';


const Wrapper = styled.div``

const Slide = styled.div``

const ImageSlider = ({images = [], ...props}) => {
  return <Wrapper {...props}>
  {images.map((image, index) => (
    <Slide key={index}></Slide>
  ))}
  </Wrapper>;
};

export default ImageSlider;