import React from 'react';
import Slider from 'react-slick';
import { Box, Text, Image } from '@chakra-ui/react';

const SliderPhotos = () => {
  const photoUrls = [
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Veja um pouco sobre a galeria de fotos
      </Text>
      <Slider {...settings}>
        {photoUrls.map((url, index) => (
          <Box key={index} textAlign="center">
            <Image src={url} alt={`Photo ${index + 1}`} maxWidth="100%" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderPhotos;
