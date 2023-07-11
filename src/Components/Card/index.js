import React from 'react';
import { Box, Text, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';

export const Card = ({ title, content, icon }) => {

  const breakPonit = useBreakpointValue({ base: "base", md: "md" });

  return (
    <Box
      bg="#1C0856"
      color="#fafafa"
      borderRadius="3xl"
      p={breakPonit === "base" ? 8 : 4}
      textAlign="center"
      position="relative"
      overflow="visible"
      w={breakPonit === "base" ? undefined : 300}
      h="auto"
      boxShadow="0px 4px 22px 0px rgba(0, 0, 0, 0.1)"
      m={breakPonit === "base" ? 4 : 8}
      mb={breakPonit === "base" ? 50 : undefined}
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
      <Text fontSize="sm" color="#cacaca">
        {content}
      </Text>
    </Box>
  );
};

export default Card;
