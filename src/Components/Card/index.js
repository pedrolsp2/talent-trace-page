import React from 'react';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';

export const Card = ({ title, content, icon }) => {
  return (
    <Box
      bg="#1C0856"
      color="#fafafa"
      borderRadius="3xl"
      p={8}
      textAlign="center"
      position="relative"
      overflow="visible"
      boxShadow="0px 4px 22px 0px rgba(0, 0, 0, 0.1)"
      my={8}
      mb={50}
    >
      <Flex justifyContent="center" alignItems="center" mb={3}>
        <Box
          bg="#1C0856"
          color="#21BE7A"
          borderRadius="full"
          width="58px"
          height="58px"
          border="2px solid #fafafa"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="-29px"
          left="50%"
          transform="translateX(-50%)"
        >
          <Icon as={icon} boxSize={8} />
        </Box>
      </Flex>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <Text fontSize="sm" color="#cacaca">{content}</Text>
    </Box>
  );
};

export default Card;
