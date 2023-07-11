import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import { FaReact, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const DevSection = () => {
  return (
    <Box py={16} px={8} color="#fafafa">
      <Heading as="h2" size="xl" mb={8}>
        Sobre o Desenvolvimento do TalentTrace
      </Heading>

      <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={8}>
        <FaReact size={40} color="#14AF6C" />
        <Box ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold" textAlign={{ base: 'center', md: 'left' }}>
            Tecnologias Modernas
          </Text>
          <Text>
            O TalentTrace foi desenvolvido utilizando o framework React Native e a plataforma Expo, proporcionando uma experiência de desenvolvimento ágil e moderna.
          </Text>
        </Box>
      </Flex>

      <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={8}>
        <FaMobileAlt size={40} color="#14AF6C" />
        <Box ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold" textAlign={{ base: 'center', md: 'left' }}>
            Aplicativo para Dispositivos Móveis
          </Text>
          <Text>
            O TalentTrace é um aplicativo mobile, desenvolvido para ser executado em dispositivos iOS e Android, garantindo acesso e usabilidade em qualquer lugar.
          </Text>
        </Box>
      </Flex>

      <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={8}>
        <FaDatabase size={40} color="#14AF6C" />
        <Box ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold" textAlign={{ base: 'center', md: 'left' }}>
            Backend com Firebase e AsyncStorage
          </Text>
          <Text>
            Para o backend do TalentTrace, utilizamos tecnologias como o Firebase e AsyncStorage para armazenamento de dados, garantindo uma experiência fluida e segura para os usuários.
          </Text>
        </Box>
      </Flex>

      <Image src="/app.png" alt="Imagem do app" mx="auto" mt={8} borderRadius="md" />
    </Box>
  );
};

export default DevSection;
