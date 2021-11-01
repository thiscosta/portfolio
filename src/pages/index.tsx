import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Home from "../components/Home"
import Resume from "../components/Resume"
import Portfolio from "../components/Portfolio"
import Services from "../components/Services"
import Contact from "../components/Contact"
import { ScaleFade, SlideFade } from "@chakra-ui/transition"

const IndexPage = () => {
  const [currentScreen, setCurrentScreen] = React.useState<number>(0)

  const onScreenChange = (nextScreen: number) => {
    setCurrentScreen(nextScreen)
  }

  return (
    <Layout onScreenChange={onScreenChange}>
      <Seo title="Home" />
      {currentScreen === 0 && (
        <ScaleFade delay={0.15} initialScale={0.8} in={currentScreen === 0}>
          <Home />
        </ScaleFade>
      )}
      {currentScreen === 1 && (
        <SlideFade delay={0.30} reverse in={currentScreen === 1}>
          <Resume />
        </SlideFade>
      )}
      {currentScreen === 2 && (
        <ScaleFade delay={0.15} initialScale={0.8} in={currentScreen === 2}>
          <Services />
        </ScaleFade>
      )}
      {currentScreen === 3 && (
        <SlideFade delay={0.30} reverse in={currentScreen === 3}>
          <Portfolio />
        </SlideFade>
      )}
      {currentScreen === 4 && (
        <ScaleFade delay={0.15} initialScale={0.8} in={currentScreen === 4}>
          <Contact />
        </ScaleFade>
      )}
    </Layout>
  )
}

export default IndexPage
