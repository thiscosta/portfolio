import { Stack } from '@chakra-ui/layout';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

// import { Container } from './styles';

const HeaderContent: React.FC = () => {
    return (
        <Stack
            direction="column"
            align="center"
            justify="center"
            h="80vh"
        >
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />
        </Stack>
    );
}

export default HeaderContent;