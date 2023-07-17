import React, { useState, useEffect } from 'react';
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
import SliderPhotos from '../Components/SliderPhotos';

import Foto from './Slide/Boas vindas - 1.png'
import Foto1 from './Slide/Boas vindas - 2.png'
import Foto2 from './Slide/Boas vindas - 3.png'
import Foto3 from './Slide/Boas vindas - 4.png'
import Foto4 from './Slide/EditarInfo.PNG'
import Foto5 from './Slide/EditarSkills.PNG'
import Foto6 from './Slide/Favoritos.PNG'
import Foto7 from './Slide/Feed.PNG'
import Foto8 from './Slide/Login.png'
import Foto9 from './Slide/Nova Conta.PNG'
import Foto10 from './Slide/Nova Conta2.PNG'
import Foto11 from './Slide/Nova Conta3.PNG'
import Foto12 from './Slide/Nova Conta4.PNG'
import Foto13 from './Slide/Nova Conta5.PNG'
import Foto14 from './Slide/Nova Conta6.PNG'
import Foto15 from './Slide/Nova Conta7.PNG'
import Foto16 from './Slide/Nova Publi.PNG'
import Foto17 from './Slide/Nova Publi1.PNG'
import Foto18 from './Slide/PerfilDoAmigo.PNG'
import Foto19 from './Slide/PerfilDoUsuario.PNG'
import Foto20 from './Slide/Pesquiar.PNG'
import Foto21 from './Slide/Pesquisar1.PNG'
import Foto22 from './Slide/PesquisarJogadores.PNG'
import Foto23 from './Slide/Sucesso.PNG'

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

    const img = [
        Foto,
        Foto1,
        Foto2,
        Foto3,
        Foto4,
        Foto5,
        Foto6,
        Foto7,
        Foto8,
        Foto9,
        Foto10,
        Foto11,
        Foto12,
        Foto13,
        Foto14,
        Foto15,
        Foto16,
        Foto17,
        Foto18,
        Foto19,
        Foto20,
        Foto21,
        Foto22,
        Foto23
    ];

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
                    zIndex={1000}
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
            <DevSection />
            <Box>
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    align='center'>
                    Galeria de fotos
                </Text>
                <SliderPhotos images={img} />
            </Box>
            <CardDownload />
            <Footer />
        </>
    );
}

export default Index;
