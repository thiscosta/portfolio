import React from "react"
import { Box, Text, VStack } from "@chakra-ui/layout"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import Sites from "./Sites"
import Apps from "./Apps"
import Systems from "./Systems"
import Customs from "./Customs"
import { useBreakpointValue } from "@chakra-ui/media-query"

const Portfolio: React.FC = () => {
  const tabFontSize = useBreakpointValue({ base: "xs", lg: "normal" })

  return (
    <VStack
      spacing={0}
      align="stretch"
      w={{ sm: "94%", md: "85%", xl: "70%" }}
      ml={{ sm: "3%", md: "7.5%", xl: "15%" }}
    >
      <Box
        roundedTop="lg"
        bgColor="brand.100"
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
            <Tab
              fontSize={tabFontSize}
              fontWeight="semibold"
              _selected={{ color: "white", bg: "brand.100" }}
            >
              Sites
            </Tab>
            <Tab
              fontSize={tabFontSize}
              fontWeight="semibold"
              _selected={{ color: "white", bg: "brand.100" }}
            >
              Aplicativos
            </Tab>
            <Tab
              fontSize={tabFontSize}
              fontWeight="semibold"
              _selected={{ color: "white", bg: "brand.100" }}
            >
              Sistemas
            </Tab>
            <Tab
              fontSize={tabFontSize}
              fontWeight="semibold"
              _selected={{ color: "white", bg: "brand.100" }}
            >
              Outros
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
