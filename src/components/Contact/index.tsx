import React from "react"
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/layout"
import ContactItem from "./components/ContactItem"
import {
  MdEmail,
  MdPhone,
  MdPlace,
  MdCheck,
  MdOutlineEmail,
  MdOutlineTextFields,
  MdOutlinePhone,
  MdOutlineMessage,
} from "react-icons/md"
import { FormControl, FormLabel } from "@chakra-ui/form-control"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import { Textarea } from "@chakra-ui/textarea"
import { Button } from "@chakra-ui/button"

const Contact: React.FC = () => {
  return (
    <VStack
      spacing={0}
      align="stretch"
      w={{ sm: "94%", md: "85%", xl: "70%" }}
      ml={{ sm: "3%", md: "7.5%", xl: "15%" }}
    >
      <Box
        roundedTop="lg"
        bgColor="#2eca7f"
        bgImage="url('images/banner-bg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        px="5%"
        py="3%"
      >
        <Text
          bgColor="white"
          bgClip="text"
          fontSize="5xl"
          fontWeight="bold"
          align="center"
        >
          Contato
        </Text>
      </Box>
      <Box
        boxShadow="xl"
        roundedBottom="lg"
        bgImage="url('images/banner-bg.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        px="5%"
        py="3%"
      >
        <SimpleGrid
          spacing={{ base: 4, lg: 10 }}
          py={10}
          columns={{ sm: 1, md: 2 }}
        >
          <Box>
            <Text fontWeight="bold" fontSize="xl" mb="10">
              Entre em contato
            </Text>
            <ContactItem title="Hortolândia, São Paulo" icon={MdPlace} />
            <ContactItem title="thiscosta.developer@gmail.com" icon={MdEmail} />
            <ContactItem title="(19) 98979-8197" icon={MdPhone} />
            <ContactItem title="Disponível" icon={MdCheck} />
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="xl">
              Mensagem
            </Text>
            <Box mt="8" color="#0B0E3F">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Nome</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineTextFields color="#2eca7f" />}
                    />
                    <Input type="text" size="md" placeholder="Nome" />
                  </InputGroup>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>E-mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineEmail color="#2eca7f" />}
                    />
                    <Input type="text" size="md" placeholder="E-mail" />
                  </InputGroup>
                </FormControl>
                <FormControl id="phone">
                  <FormLabel>Telefone</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlinePhone color="#2eca7f" />}
                    />
                    <Input type="text" size="md" placeholder="Telefone" />
                  </InputGroup>
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Mensagem</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineMessage color="#2eca7f" />}
                    />
                    <Textarea
                      pl="10"
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="Escreva sua mensagem"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="btnSend" float="right">
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
                    Entrar em contato
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </VStack>
  )
}

export default Contact
