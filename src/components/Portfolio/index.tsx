import React from "react"
import { Box, Text, VStack } from "@chakra-ui/layout"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import Sites from "./Sites"
import Apps from "./Apps"
import Systems from "./Systems"
import Customs from "./Customs"

const Portfolio: React.FC = () => {
  return (
    <VStack
      spacing={0}
      align="stretch"
      w={{ sm: "94%", md: "85%", xl: "70%" }}
      ml={{ sm: "3%", md: "7.5%", xl: "15%" }}
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
          Portfólio
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
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab _selected={{ color: "white", bg: "#2eca7f" }}>Sites</Tab>
            <Tab _selected={{ color: "white", bg: "#2eca7f" }}>Aplicativos</Tab>
            <Tab _selected={{ color: "white", bg: "#2eca7f" }}>
              Sistemas web
            </Tab>
            <Tab _selected={{ color: "white", bg: "#2eca7f" }}>
              Soluções customizadas
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Sites />
            </TabPanel>
            <TabPanel>
              <Apps />
            </TabPanel>
            <TabPanel>
              <Systems />
            </TabPanel>
            <TabPanel>
              <Customs />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  )
}

export default Portfolio
