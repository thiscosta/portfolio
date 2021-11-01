import { Button } from "@chakra-ui/button"
import { GridItem } from "@chakra-ui/layout"
import React from "react"

// import { Container } from './styles';

const DownloadButton: React.FC = () => {
  return (
    <GridItem colSpan={2} textAlign="center" mt={10}>
      <Button
        color="white"
        bgColor="#2eca7f"
        mt="20px"
        fontSize="small"
        variant="outline"
        _hover={{
          bgColor: "#2eca7f",
        }}
      >
        Baixar currículo
      </Button>
    </GridItem>
  )
}

export default DownloadButton
