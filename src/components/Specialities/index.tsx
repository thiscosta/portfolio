import React from 'react';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import SpecialityCard from './SpecialityCard';

const Specialities: React.FC = () => {
    return (
        <Flex py="20" bgColor="#FAFBFF" direction="column">
            <Box>
                <Text
                    bgColor="#1E3D58"
                    bgClip="text"
                    fontSize="3xl"
                    fontWeight="medium"
                    align="center"
                >
                    O que eu faço
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
                    Trabalhando com desenvolvimento de software desde 2018,
                    tenho experiência com desenvolvimento de
                    <Text
                        bgColor="#057DCD"
                        bgClip="text"
                        fontSize="lg"
                        fontWeight="medium"
                    >
                        sistemas web, sites, aplicativos mobile e utilitários.
                    </Text>
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
                    Especializado em
                </Text>
            </Box>
            <SimpleGrid
                mt="10"
                spacing="24px"
                px={{ base: "10", md: "20", lg: "40" }}
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                alignItems="center"
                justifyContent="center"
            >
                <SpecialityCard title="Desenvolvimento de sistemas web" image="http://pixner.net/readora/images/specilizing-icon1.png" />
                <SpecialityCard title="Sites pessoais/empresariais" image="http://pixner.net/readora/images/specilizing-icon1.png" />
                <SpecialityCard title="Aplicativos mobile (Android)" image="http://pixner.net/readora/images/specilizing-icon2.png" />
                <SpecialityCard title="Soluções customizadas" image="http://pixner.net/readora/images/specilizing-icon3.png" />
            </SimpleGrid>
        </Flex>
    );
}

export default Specialities;