import React,{useState,useEffect} from 'react';
import { FiShare2, FiUserPlus, FiGitPullRequest } from 'react-icons/fi';
import { Box, Text, Button } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

import { scrollToFooter, scrollToTop } from '../Components/Settings/scroll';

import Header from '../Components/Header';
import Section from '../Components/Section';
import InfoSection from '../Components/InfoSection';
import CardDownload from '../Components/CardDownload';
import { Card } from '../Components/Card';
import DevSection from '../Components/DevSection';
import Footer from '../Components/Footer';

const Index = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };
        return (
            <>
                <Header />
                {isVisible && (
        <Button
          onClick={scrollToTop} 
          w={50}
          h={50}
          backgroundColor='#fafafa'
          borderRadius='full'
          pos="fixed"
          bottom={5}
          right={5}
          zIndex={100}
        >
          <FaArrowUp size={32} color='#14AF6C' />
        </Button>
      )}
                <Section gradient>
                    <Card
                        title="Novas amizades"
                        content="Faça amizades com atletas do mundo inteiro! Aumente seu networking e mostre seus talentos para os novos amigos."
                        icon={FiUserPlus}
                    />
                    <Card
                        title="Rede contatos"
                        content="Varias pessoas importantes podem estar de olho no seu futebol! Faça sempre bonito, se comporte e o principal, compartilhe aqui!"
                        icon={FiGitPullRequest}
                    />
                    <Card
                        title="Compartilhe"
                        content="Compartilhe todos os momentos da sua jornada no esporte aqui. Seja ele feliz, triste ou de conquistas. Compartilhe momentos!"
                        icon={FiShare2}
                    />
                </Section>
                <Box>
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        align='center'>Por que usar o TalentTrace?</Text>
                </Box>
                <Section>
                    <InfoSection
                        title="Seus talentos"
                        imageSrc="/talento.svg"
                        paragraph="Se você é um jovem apaixonado pelo futebol e está ansioso para mostrar seus talentos para o mundo, temos a solução perfeita para você. "
                    />
                    <InfoSection
                        title="Descubra mais"
                        imageSrc="/descubra.svg"
                        paragraph="Mas isso não é tudo. Para tornar a experiência ainda mais emocionante, oferecemos desafios regulares e competições exclusivas dentro do aplicativo. "
                    />
                    <InfoSection
                        title="Encontre os futuros craques"
                        imageSrc="/encontre.svg"
                        paragraph="Além disso, nossa plataforma permite que você entre em contato diretamente com os jogadores e seus representantes. "
                    />
                </Section>
                <Box 
                    bgGradient="linear-gradient(180deg, #21BE7A 20%, #05020F 96.67%)"
                    display="flex"
                    flexDirection="column"
                    p={2}
                    py={16}
                    gap={4}
                    >
                    <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        align='center'>
                            Então nao mais perca tempo!
                    </Text>
                    <Text
                        fontSize="2xl"
                        color='#cacaca'
                        align='center'>
                            Baixe o TalentTrace agora
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
                        onClick={scrollToFooter}
                        >
                        Baixar agora!
                    </Button>
                </Box>
                <DevSection/>
                <CardDownload/>
                <Footer/>
            </>
        );
    }

export default Index;
