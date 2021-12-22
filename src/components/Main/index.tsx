import * as React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Home from "../../components/Home"
import Resume from "../../components/Resume"
import Portfolio from "../../components/Portfolio"
import Services from "../../components/Services"
import Contact from "../../components/Contact"
import { ScaleFade, SlideFade } from "@chakra-ui/transition"
import { NavigationContext } from "../../contexts/NavigationContexts"

const IndexPage = () => {
  const { currentScreen } = React.useContext(NavigationContext)

  return (
    <Layout>
      <Seo title="Home" />
      {currentScreen === 0 && (
        <ScaleFade delay={0.15} initialScale={0.8} in={currentScreen === 0}>
          <Home />
        </ScaleFade>
      )}
      {currentScreen === 1 && (
        <SlideFade delay={0.3} reverse in={currentScreen === 1}>
          <Resume />
        </SlideFade>
      )}
      {currentScreen === 2 && (
        <ScaleFade delay={0.15} initialScale={0.8} in={currentScreen === 2}>
          <Services />
        </ScaleFade>
      )}
      {currentScreen === 3 && (
        <SlideFade delay={0.3} reverse in={currentScreen === 3}>
          <Contact />
        </SlideFade>
      )}
      {currentScreen === 4 && (
        <ScaleFade delay={0.15} initialScale={0.8} in={currentScreen === 4}>
          <Portfolio />
        </ScaleFade>
      )}
    </Layout>
  )
}

export default IndexPage
