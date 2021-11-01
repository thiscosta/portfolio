import { Image } from "@chakra-ui/image"
import { Box, Text } from "@chakra-ui/layout"
import React from "react"

export interface ServiceCardParams {
  title: string
  description: string
  image: string
}

const ServiceCard: React.FC<ServiceCardParams> = ({
  title,
  description,
  image,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Image
        borderRadius="full"
        objectFit="cover"
        boxSize="150px"
        src={image}
      />
      <Text fontWeight="bold" textAlign="center" fontSize="lg">
        {title}
      </Text>
      <Text fontSize="sm" textAlign="center">
        {description}
      </Text>
    </Box>
  )
}

export default ServiceCard
