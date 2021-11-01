import { SimpleGrid } from "@chakra-ui/layout"
import React from "react"

const ProjectTypeContainer: React.FC = ({ children }) => {
  return (
    <SimpleGrid
      spacing="24px"
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      alignItems="center"
      justifyContent="center"
    >
     {children}
    </SimpleGrid>
  )
}

export default ProjectTypeContainer
