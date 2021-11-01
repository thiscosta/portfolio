import { Box, GridItem, Text } from "@chakra-ui/layout"
import React from "react"
import Skill from "./components/Skill"

// import { Container } from './styles';

const CodingSkills: React.FC = () => {
  return (
    <GridItem colSpan={2}>
      <Text fontSize="xl" fontWeight="bold">
        Habilidades
      </Text>
      <Box mt={5}>
        <Skill title="Javascript" value={100} />
        <Skill title="NodeJS" value={95} />
        <Skill title="React" value={95} />
        <Skill title="React Native" value={87} />
        <Skill title="Java" value={78} />
        <Skill title="Mensageria" value={75} />
        <Skill title="Cloud (AWS/GCP)" value={73} />
        <Skill title="Kubernetes/Docker" value={70} />
        <Skill title="ELK" value={67} />
        <Skill title="Spark" value={60} />
        <Skill title="Salesforce" value={60} />
        <Skill title="Android" value={40} />
        <Skill title="Python" value={30} />
      </Box>
    </GridItem>
  )
}

export default CodingSkills
