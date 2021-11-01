import React, { useContext } from "react"

import {
  Box,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react"
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"
import { NavigationContext } from "../../../../contexts/NavigationContexts"

function PriceWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  )
}

const Pricing: React.FC = () => {
  const { setCurrentScreen } = useContext(NavigationContext)
  return (
    <Box py={12}>
      <SimpleGrid
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        columns={{ sm: 1, md: 2, xl: 3 }}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Websites
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                50
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /hora
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                portfolios, sites institucionais e/ou pessoais
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                consultoria de hospedagem grátis
              </ListItem>
              <ListItem>
                <ListIcon as={FaExclamationCircle} color="red.500" />
                plano de hospedagem e domínio não incluídos
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Aplicativos android
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  R$
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  60
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /hora
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  desenvolvimento sob medida
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  seguro e performático
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  design próprio ou do cliente
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  desenvolvimento de protótipos
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  publicação na Play Store
                </ListItem>
              </List>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Sistemas web
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                65
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /hora
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                frontend + backend
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                desenvolvimento de protótipos
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                facil manutenção e evolução do produto
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                consultoria de hospedagem grátis
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
      </SimpleGrid>
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
        onClick={() => {
          setCurrentScreen(4)
        }}
      >
        Entrar em contato
      </Button>
    </Box>
  )
}

export default Pricing
