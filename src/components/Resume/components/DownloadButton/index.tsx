import React from "react"
import { Button } from "@chakra-ui/button"
import { GridItem } from "@chakra-ui/layout"
import resumePdf from "../../../../files/CV.pdf"

const DownloadButton: React.FC = () => {
  return (
    <GridItem colSpan={2} textAlign="center" mt={10}>
      <Button
        w="100%"
        p="2%"
        color="white"
        bgColor="#2eca7f"
        mt="20px"
        fontSize="md"
        fontWeight="bold"
        _hover={{
          bgColor: "#2eca7f",
        }}
      >
        <a href={resumePdf}>Baixar currículo</a>{" "}
      </Button>
    </GridItem>
  )
}

export default DownloadButton
