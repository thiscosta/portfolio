import React from 'react';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = () => {
    return (
        <svg width={150} height={28} xmlns="http://www.w3.org/2000/svg">
            <g>
                <title>Logo</title>
                <text
                    style={{ cursor: "move" }}
                    fontWeight="bold"
                    xmlSpace="preserve"
                    textAnchor="start"
                    fontSize={15}
                    id="svg_3"
                    y="18.5"
                    strokeWidth={0}
                    stroke="#000"
                    fill="gray"
                >
                    © 2021 thiscosta
                </text>
            </g>
        </svg>

    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            position="static"
            bottom="0"
            w="full"
            left="0"
            color="grey">
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}