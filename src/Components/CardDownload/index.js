import { Box, Text, Button, Link } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';

const CardDownload = () => {
  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    if (isAndroid) {
      // Lógica para fazer o download do arquivo APK
      // Aqui você pode adicionar a implementação para fazer o download do arquivo APK
    } else if (isIOS) {
      alert('Não é possível baixar o APK em dispositivos iOS.');
    }
  };

  return (
    <Box
      bgGradient="linear(to-r, #14AF6C, #1A0751)"
      borderRadius="lg"
      p={8}
      textAlign="center"
      boxShadow="md"
    >
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Baixe Agora!
      </Text>
      <Text mb={8}>
        Aproveite todos os recursos do TalentTrace em seu dispositivo móvel.
      </Text>
      <Link href="" download>
        <Button
          colorScheme="teal"
          leftIcon={<FaDownload />}
          onClick={handleDownload}
        >
          Baixar APK
        </Button>
      </Link>
    </Box>
  );
};

export default CardDownload;
