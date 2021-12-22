import React from "react"
import {
  Grid,
  GridItem,
  Text,
  IconButton,
  SimpleGrid,
  Center,
} from "@chakra-ui/react"
import { FaLinkedin } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

const Title: React.FC = () => {
  return (
    <Grid
      rounded="xl"
      bgColor="brand.100"
      bgImage="url('images/banner-bg.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      paddingX="5%"
      templateColumns={{
        sm: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      mb="-40px"
    >
      <GridItem
        colSpan={{
          base: 2,
          lg: 1,
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StaticImage
          src="../../../images/avatar/avatar.png"
          width={300}
          height={300}
          quality={95}
          alt="A Gatsby astronaut"
        />
      </GridItem>
      <GridItem
        pt="20px"
        height="300px"
        colSpan={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          bgColor="white"
          bgClip="text"
          fontSize="5xl"
          fontWeight="bold"
          align="center"
        >
          Thiago Costa
        </Text>
        <Text bgColor="white" bgClip="text" fontSize="xl" align="center">
          Desenvolvedor de software
        </Text>
        <SimpleGrid mt="30px" columns={1} spacing={5} justifyContent="center">
          <a href="https://www.linkedin.com/in/thiscosta00/">
            <IconButton
              variant="solid"
              colors="whiteAlpha"
              aria-label="Send email"
              icon={<FaLinkedin color="grey" />}
            />
          </a>
        </SimpleGrid>
      </GridItem>
    </Grid>
  )
}

export default Title
