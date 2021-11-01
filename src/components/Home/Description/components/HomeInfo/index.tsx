import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

// import { Container } from './styles';

export interface HomeInfoProps {
    title: string;
    value: string;
    color?: string;
}

const HomeInfo: React.FC<HomeInfoProps> = ({
    title,
    value,
    color,
}) => {
    return (
        <Flex
            ml={{ sm: '0px', lg: '30px' }}
            alignItems="center"
            justifyContent="flex-start"
        >
            <Text width="50%" fontSize="small">{title}</Text>
            <Text
                fontSize="small"
                color={color || "gray.400"}
                mt="5px"
            >{value}</Text>
        </Flex>
    );
}

export default HomeInfo;