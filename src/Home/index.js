import React, { Component } from 'react';
import { FiShare2, FiUserPlus, FiGitPullRequest } from 'react-icons/fi';
import { Box, Text } from '@chakra-ui/react';

import Header from '../Components/Header';
import Section from '../Components/Section';
import InfoSection from '../Components/InfoSection';
import { Card } from '../Components/Card';

class Index extends Component {
    render() {
        return (
            <>
                <Header />
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
            </>
        );
    }
}

export default Index;
