import React from "react"
import { VStack, Box } from "@chakra-ui/react"
import Title from "./Title"
import Description from "./Description"

const Home: React.FC = () => {
  return (
    <VStack
      spacing={0}
      align="stretch"
      w={{ sm: "94%", md: "85%", xl: "80%" }}
      ml={{ sm: "3%", md: "7.5%", xl: "10%" }}
    >
      <Box boxShadow="xl" rounded="lg">
        <Title />
        <Description />
      </Box>
    </VStack>
  )
}

export default Home
