import React from "react"
import { Box, Text } from "@chakra-ui/layout"
import { Icon } from "@chakra-ui/react"

export interface ContactItemParams {
  title: string
  icon: any
}
const ContactItem: React.FC<ContactItemParams> = ({ title, icon }) => {
  return (
    <Box display="flex" flexDir="row" alignItems="center" mt="5">
      <Icon as={icon} w={5} h={5} color="#2eca7f" mr="8" />
      <Text fontWeight="bold" fontSize="sm">
        {title}
      </Text>
    </Box>
  )
}

export default ContactItem
