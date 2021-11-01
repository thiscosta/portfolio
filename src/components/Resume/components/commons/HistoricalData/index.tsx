import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, GridItem, Text } from "@chakra-ui/layout"
import React from "react"
import Cards, { CardsParams } from "../Cards"

export interface HistoricalDataParams {
  title: string
  cards: CardsParams[]
}

const HistoricalData: React.FC<HistoricalDataParams> = ({ title, cards }) => {
  return (
    <GridItem colSpan={{ sm: 2, lg: 1 }}>
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>

      <Box
        mt={4}
        w={"full"}
        borderColor="gray.300"
        bg={useColorModeValue("white", "gray.800")}
        overflow={"hidden"}
      >
        {cards.map(card => (
          <Cards
            content={card.content}
            title={card.title}
            date={card.date}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </Box>
    </GridItem>
  )
}

export default HistoricalData
