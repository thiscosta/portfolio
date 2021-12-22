import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import Main from "../components/Main"
import NavigationContextComponent from "../contexts/NavigationContexts"
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    brand: {
      100: "#247BA0",
      // ...
      900: "#1a202c",
    },
  },
})

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme} >
      <NavigationContextComponent>
        <Main />
      </NavigationContextComponent>
    </ChakraProvider>
  )
}

export default IndexPage
