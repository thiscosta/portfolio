import React from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
    Image,
} from '@chakra-ui/react';

export interface SpecialityCardProps {
    image: string;
    title: string;
};

const SpecialityCard: React.FC<SpecialityCardProps> = ({ image, title }) => {
    return (
        <Center py={12}>
            <Box
                transition="all 0.2s ease"
                role={'group'}
                p={6}
                maxW={'300px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                _hover={{
                    transform: 'scale(1.1)',
                }}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1,
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={image}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Heading fontSize="2xl" fontWeight="bold" color="#1E3D58" textAlign="center">
                        {title}
                    </Heading>
                </Stack>
            </Box>
        </Center>
    );
}

export default SpecialityCard;