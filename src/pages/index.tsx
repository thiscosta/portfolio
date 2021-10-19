import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderContent from "../components/HeaderContent"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeaderContent />
  </Layout>
)

export default IndexPage
