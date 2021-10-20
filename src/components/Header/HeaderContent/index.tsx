import React from 'react';
import { Button } from '@chakra-ui/button';
import { Text, Stack } from '@chakra-ui/layout';
import { StaticImage } from 'gatsby-plugin-image';

// import { Container } from './styles';

const HeaderContent: React.FC = () => {
    return (
        <Stack
            direction="column"
            align="center"
            justify="center"
            h="80vh"
        >
            <StaticImage
                src="../../../images/avatar/avatar.png"
                width={300}
                height={300}
                quality={95}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />
            <Text
                bgColor="#1E3D58"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                align="center"
            >
                Prazer, meu nome é Thiago!
            </Text>
            <Text
                bgGradient="linear(to-l, #43B0F1, #057DCD)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
                align="center"
            >
                Desenvolvedor de software
            </Text>
            <Button
                bgGradient="linear(to-l, #43B0F1, #057DCD)"
                color="white"
                size="lg"
                _hover={{
                    opacity: 0.8
                }}
                _active={{
                    opacity: 0.6
                }}
            >
                Bora tirar seu projeto do papel?
            </Button>

        </Stack>
    );
}

export default HeaderContent;