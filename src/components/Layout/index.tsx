/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import "./layout.css"
import { Box } from "@chakra-ui/layout"
import Footer from "../Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Box width={{ base: "100%", sm: "0%", md: "25%" }}>
        <div className="header-background" />
      </Box>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="header-content">
        <Box pb="50">
          <main>{children}</main>
        </Box>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
