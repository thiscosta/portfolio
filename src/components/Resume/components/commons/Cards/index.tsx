import React from "react"
import {
  Heading,
  Box,
  Text,
  Grid,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react"

export interface CardsParams {
  title: string
  date: string
  description: string
  content: string
  tags?: string[]
}

const Cards: React.FC<CardsParams> = ({
  title,
  date,
  description,
  content,
  tags,
}) => {
  return (
    <Box
      my="4"
      bg={useColorModeValue("white", "gray.900")}
      borderLeftColor="#2eca7f"
      rounded="lg"
      borderWidth={1}
      p={5}
    >
      <Heading fontSize={"xl"} fontFamily={"body"} mb={2}>
        {title}
      </Heading>
      <Box display="flex" flexDirection="row" mb={4}>
        <Text fontSize="xs" color="#2eca7f" mr="1.5">
          {date}
        </Text>
        <Text fontSize="xs" color="#2eca7f" mr="1.5">
          |
        </Text>
        <Text fontSize="xs" color={"gray.500"}>
          {description}
        </Text>
      </Box>
      <Text fontSize="sm" color={useColorModeValue("gray.700", "gray.400")}>
        {content}
      </Text>
      {tags && (
        <Grid
          mt={3}
          templateColumns={{
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={3}
        >
          {tags.map(tag => (
            <Box>
              <Badge
                bgColor="#2eca7f"
                color="white"
                fontWeight={"600"}
              >
                {tag}
              </Badge>
            </Box>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default Cards
