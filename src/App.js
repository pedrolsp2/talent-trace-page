import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Home from './Home'

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: '#05020F',
        color: '#fafafa',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
