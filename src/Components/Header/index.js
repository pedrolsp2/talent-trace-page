import React from 'react';
import { Box, Flex, Image, IconButton, VStack, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { FiDownload } from 'react-icons/fi';

const Header = () => {

  const breakPonit = useBreakpointValue({ base: "base", md: "md" });

  return (
    <Box
      bgGradient="linear(180deg, rgba(5, 2, 15, 0.25) 0%, rgba(20, 143, 104, 0.25) 100%)"
      color="#fafafa"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        height="100px"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        position="relative"
        zIndex={1}
      >
        <Image
          src="/logo192.png"
          alt="Logo"
          height="60px"
          marginEnd={4}
        />
        <IconButton
          icon={<FiDownload size={32} />}
          aria-label="Download"
          color="#14AF6C"
          variant="ghost"
          size="lg"
        />
      </Flex>

      <>
        {breakPonit === "base" ? (
          <VStack
            py={8}
            paddingInline={2}
            textAlign="center"
            gap={4}
          >
            <Image src="/persona.svg" alt="Persona" />
            <Text fontSize="3xl" fontWeight="bold">
              Amplie sua rede agora com o Talent Trace
            </Text>
            <Text color="#cacaca" fontSize="lg">
              Seja visto por milhares de pessoas e olheiros do futebol mundial. Poste vídeos e fotos do seu cotidiano como atleta, salve usuários que jogam futebol raiz.
            </Text>
            <Button
              backgroundColor="#14AF6C"
              color="#fafafa"
              size="lg"
              mt={6}
              _hover={{
                backgroundColor: '#fafafa',
                color: '#14AF6C'
              }}
            >
              Saber mais
            </Button>
          </VStack>
        ) : (
          <Flex
            direction={{ base: 'column', md: 'row' }}
            py={8}
            px={2}
            gap={4} 
            alignItems="center"
            justifyContent="center"
          >
            <VStack align="flex-start" m={14} marginTop={25} spacing={4} textAlign={{ base: 'center', md: 'left' }}>
              <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold">
                Amplie sua rede agora com o Talent Trace
              </Text>
              <Text color="#cacaca" fontSize="lg">
                Seja visto por milhares de pessoas e olheiros do futebol mundial. Poste vídeos e fotos do seu cotidiano como atleta, salve usuários que jogam futebol raiz.
              </Text>
              <Button
                backgroundColor="#14AF6C"
                color="#fafafa"
                size="lg"
                mt={6}
                _hover={{
                  backgroundColor: '#fafafa',
                  color: '#14AF6C'
                }}
              >
                Saber mais
              </Button>
            </VStack>
            <Box>
              <Image src="/Rectangle.png" alt="Persona" maxW="100%" height="auto" />
            </Box>
          </Flex>

        )}
      </>
    </Box>
  );
};

export default Header;
