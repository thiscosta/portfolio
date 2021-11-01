import { Button } from "@chakra-ui/button"
import { Box, Grid, GridItem, Text } from "@chakra-ui/layout"
import React from "react"
import HomeInfo from "./components/HomeInfo"
import resumePdf from "../../../files/CV.pdf"

const Description: React.FC = () => {
  return (
    <Box borderBottomRadius="xl" bgColor="white" p="10%">
      <Grid
        rounded="xl"
        bgPosition="center"
        bgRepeat="no-repeat"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        mb="-40px"
      >
        <GridItem
          colSpan={{ sm: 2, lg: 1 }}
          display="flex"
          flexDirection="column"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Sobre mim
          </Text>
          <Text mt="13px" fontSize="small" fontWeight="normal">
            Meu nome é Thiago Costa, sou desenvolvedor de software desde 2018 e
            tenho experiência com diversas tecnologias. Atualmente trabalhando
            no Luizalabs como desenvolvedor Fullstack
          </Text>
          <Button
            color="white"
            bgColor="#2eca7f"
            mt="20px"
            fontSize="small"
            fontWeight="bold"
            _hover={{
              bgColor: "#2eca7f",
            }}
          >
            <a href={resumePdf}>Baixar currículo</a>
          </Button>
        </GridItem>
        <GridItem
          mt={{ sm: "30px", lg: "0px" }}
          colSpan={{ sm: 2, lg: 1 }}
          display="flex"
          flexDirection="column"
        >
          <HomeInfo title="Idade" value="21" />
          <HomeInfo title="Cidade" value="Hortolândia/SP" />
          <HomeInfo title="E-mail" value="thiscosta@live.com" color="#2eca7f" />
          <HomeInfo title="Celular" value="(19) 98979-8197" />
          <HomeInfo title="Freelance" value="Disponível" />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Description
