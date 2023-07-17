import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SliderPhotos = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: 60, marginBottom: 60}}>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} style={{height: 700, borderRadius: 12}}/>
      <Button onClick={previousSlide} style={{position: 'absolute', zIndex: 99, left: -25, height: 700, backgroundColor: 'transparent'}}><FiChevronLeft size={72} color='#14AF6C'/></Button>
      <Button onClick={nextSlide} style={{position: 'absolute', zIndex: 9999, right: -25, height: 700, backgroundColor: 'transparent'}}><FiChevronRight size={72} color='#14AF6C'/></Button>
    </Box>
  );
};

export default SliderPhotos;
