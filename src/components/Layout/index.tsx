import * as React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import "./layout.css"
import { Box } from "@chakra-ui/layout"
import Footer from "../Footer"

export interface LayoutParams {
  onScreenChange: (nextScreen: number) => void
  children: React.ReactNode
}

const Layout: React.FC<LayoutParams> = ({ children, onScreenChange }) => {
  return (
    <>
      <Header onScreenChange={onScreenChange} siteTitle={`Thiago Costa`} />
      <div className="header-content">
        <Box pb="50">
          <main>{children}</main>
        </Box>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
