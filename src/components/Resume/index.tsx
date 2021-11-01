import { Box, Grid, Text, VStack } from "@chakra-ui/layout"
import React from "react"
import CodingSkills from "./components/CodingSkills"
import DownloadButton from "./components/DownloadButton"
import Education from "./components/Education"
import Experience from "./components/Experience"

const Resume: React.FC = () => {
  return (
    <VStack
      spacing={0}
      align="stretch"
      w={{ sm: "94%", md: "85%", xl: "80%" }}
      ml={{ sm: "3%", md: "7.5%", xl: "10%" }}
    >
      <Box
        roundedTop="lg"
        bgColor="#2eca7f"
        bgImage="url('images/banner-bg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        px="5%"
        py="3%"
      >
        <Text
          bgColor="white"
          bgClip="text"
          fontSize="5xl"
          fontWeight="bold"
          align="center"
        >
          Currículo
        </Text>
      </Box>
      <Box
        boxShadow="xl"
        roundedBottom="lg"
        bgImage="url('images/banner-bg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        px="5%"
        py="3%"
      >
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns={{
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          <Education />
          <Experience />
          <CodingSkills />
          <DownloadButton />
        </Grid>
      </Box>
    </VStack>
  )
}

export default Resume
