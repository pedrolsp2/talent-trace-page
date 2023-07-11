import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';

const Section = ({ children, gradient }) => {
  const bgGradient = gradient
    ? 'linear(rgba(20, 143, 104, 0.25) 10%, rgba(5, 2, 15, 0.25) 100%)'
    : undefined;

  const breakPoint = useBreakpointValue({ base: 'base', md: 'md' });

  return (
    <Box bgGradient={bgGradient} p={4} flexDirection={breakPoint === 'base' ? 'column' : 'row'} display='flex' justifyContent="center">
      {children}
    </Box>
  );
};

export default Section;
