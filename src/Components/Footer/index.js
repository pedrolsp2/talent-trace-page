import { Box, Text, Link, Flex } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box py={4} px={8} color="#fafafa" marginTop={20}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center">
        <Box mr={{ base: 0, md: 8 }} mb={{ base: 4, md: 0 }}>
          <Text textAlign="center">
            O TalentTrace é uma plataforma inovadora para rastreamento e gerenciamento de talentos.
          </Text>
        </Box>

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Redes Sociais
          </Text>
          <Flex justify="center">
            <Link href="https://twitter.com/seu_perfil" isExternal mr={2} _hover={{ color: 'teal.200' }}>
              <FaTwitter size={24} />
            </Link>
            <Link href="https://www.instagram.com/seu_perfil" isExternal mr={2} _hover={{ color: 'teal.200' }}>
              <FaInstagram size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/seu_perfil" isExternal mr={2} _hover={{ color: 'teal.200' }}>
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/seu_perfil" isExternal _hover={{ color: 'teal.200' }}>
              <FaGithub size={24} />
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Flex align="center" justify="center" mt={4}>
        <Text fontSize="sm" textAlign="center">
          &copy; {new Date().getFullYear()} Copy Pedro Lucas Silva Paula |{' '}
          <Link href="https://www.pedrolsp.com.br" isExternal color="teal.200">
            www.pedrolsp.com.br
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
