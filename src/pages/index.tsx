import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Home from "../components/Home"
import Resume from "../components/Resume"
import Portfolio from "../components/Portfolio"

const IndexPage = () => {
  const [currentScreen, setCurrentScreen] = React.useState<number>(0)

  const onScreenChange = (nextScreen: number) => {
    setCurrentScreen(nextScreen)
  }

  return (
    <Layout onScreenChange={onScreenChange}>
      <Seo title="Home" />
      {currentScreen === 0 && <Home />}
      {currentScreen === 1 && <Resume />}
      {currentScreen === 3 && <Portfolio />}
    </Layout>
  )
}

export default IndexPage
