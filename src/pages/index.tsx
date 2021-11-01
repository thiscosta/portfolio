import * as React from "react"
import Main from "../components/Main"
import NavigationContextComponent from "../contexts/NavigationContexts"

const IndexPage = () => {
  return (
    <NavigationContextComponent>
      <Main />
    </NavigationContextComponent>
  )
}

export default IndexPage
