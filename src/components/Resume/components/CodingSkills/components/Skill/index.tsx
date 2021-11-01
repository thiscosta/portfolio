import { Box, Text } from "@chakra-ui/layout"
import { Progress } from "@chakra-ui/progress"
import React from "react"

export interface SkillParams {
  title: string
  value: number
}

const Skill: React.FC<SkillParams> = ({ title, value }) => {
  return (
    <Box mt={4}>
      <Text>{title}</Text>
      <Progress hasStripe colorScheme="green" size="sm" value={value} />
    </Box>
  )
}

export default Skill
