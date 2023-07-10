import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

const InfoSection = ({ title, imageSrc, paragraph }) => {
  return (
    <Box p={4} textAlign="center" mb={10}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <Flex justifyContent="center" alignItems="center" mb={4}>
        <Image src={imageSrc} alt="Imagem" boxSize="200px" objectFit="cover" borderRadius="md" />
      </Flex>
      <Text>{paragraph}</Text>
    </Box>
  );
};

export default InfoSection;
