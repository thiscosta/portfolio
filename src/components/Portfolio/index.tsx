import React from 'react';
import { Box, Flex, Grid, SimpleGrid, Text } from '@chakra-ui/layout';
import Project from './Project';

const Portfolio: React.FC = () => {
    return (
        <Flex py="20" bgColor="#F7F4FD" direction="column">
            <Box>
                <Text
                    bgColor="#1E3D58"
                    bgClip="text"
                    fontSize="3xl"
                    fontWeight="medium"
                    align="center"
                >
                    Portfolio
                </Text>
            </Box>
            <Box mt="5" w="70%" alignSelf="center">
                <Text
                    noOfLines={4}
                    bgColor="#1E3D58"
                    bgClip="text"
                    fontSize="lg"
                    fontWeight="medium"
                    align="center"
                >
                    Entregar produtos de qualidade é o que faço de melhor, buscando sempre a melhor solução para os meus clientes.
                </Text>
            </Box>
            <Box mt="20">
                <Text
                    bgGradient="linear(to-l, #43B0F1, #057DCD)"
                    bgClip="text"
                    fontSize="4xl"
                    fontWeight="extrabold"
                    align="center"
                >
                    Últimos projetos
                </Text>
            </Box>
            <SimpleGrid mt="20"
                spacing="24px"
                px={{ base: "10", md: "20", lg: "40" }}
                columns={{ sm: 1, xl: 2 }}
                alignItems="center"
                justifyContent="center">
                <Project
                    tags={['Web', 'Customizado']}
                    title="Nome do produto"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book."
                />
                <Project
                    tags={['Web', 'Customizado']}
                    title="Nome do produto"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book."   />
                <Project
                    tags={['Web', 'Customizado']}
                    title="Nome do produto"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book."   />
            </SimpleGrid>
        </Flex >
    );
}

export default Portfolio;