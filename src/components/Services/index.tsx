import React from "react"
import { Box, Grid, SimpleGrid, Text, VStack } from "@chakra-ui/layout"
import ServiceCard from "./components/ServiceCard"
import Pricing from "./components/Pricing"
import { Image } from "@chakra-ui/image"

const Services: React.FC = () => {
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
          Serviços
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
        <Text fontWeight="bold" fontSize="2xl">
          Meus serviços
        </Text>
        <SimpleGrid
          mt="20"
          columns={{
            base: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          alignItems={"flex-start"}
          gap={8}
        >
          <ServiceCard
            title="Sites"
            description="Desenvolvimento de sites pessoais, portfólios e sites empresariais"
            image="https://icon-library.com/images/features-icon-png/features-icon-png-21.jpg"
          />
          <ServiceCard
            title="Aplicativos"
            description="Desenvolvimento de aplicativos Android, com publicação na Play Store incluída"
            image="https://cdn-icons-png.flaticon.com/512/190/190507.png"
          />
          <ServiceCard
            title="Sistemas web"
            description="Desenvolvimento de sistemas web customizados para empresas, startups e etc."
            image="https://www.sollutecsistemas.com.br/img/sistemas-web.png"
          />
          <ServiceCard
            title="Soluções"
            description="Bots, manutenção de software e demais soluções customizadas"
            image="https://www.mgpconsultoria.com.br/wp-content/uploads/2018/05/BPM-E-ESOCIAL-ELEMENTOS-E-ATRIBUTOS-DOS-PROCESSOS-5.png"
          />
        </SimpleGrid>
        <Text fontWeight="bold" fontSize="2xl" mt={20}>
          Preços
        </Text>
        <Pricing />
      </Box>
    </VStack>
  )
}

export default Services
