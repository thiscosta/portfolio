import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

// import { Container } from './styles';

const WorkWithMe: React.FC = () => {
    return (
        <Box
            h="100vh"
            bgGradient="linear(to-l, #43B0F1, #057DCD)"
            py="10%"
            px="10%"
        >
            <Text
                color="white"
                fontSize="6xl"
                fontWeight="extrabold"
                maxW={{ sm: "80%", xl: '40%' }}
            >
                Interessado em trabalhar comigo?
            </Text>
            <Text
                mt="10"
                color="white"
                fontSize="2xl"
                fontWeight="thin"
                maxW={{ sm: "80%", xl: '50%' }}
            >
                Você precisa de ajuda pra finalmente tirar seu projeto do papel? Eu posso te ajudar. Entre em contato e bora trabalhar junto!
            </Text>
            <Button
                bgGradient="linear(to-l, #FF2768, #DC143C)"
                color="white"
                size="lg"
                mt="30"
                _hover={{
                    opacity: 0.8
                }}
                _active={{
                    opacity: 0.6
                }}
            >
                Quero começar agora!
            </Button>
        </Box>
    );
}

export default WorkWithMe;