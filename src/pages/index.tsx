import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderContent from "../components/Header/HeaderContent"
import Specialities from "../components/Specialities"
import Portfolio from "../components/Portfolio"
import WorkWithMe from "../components/WorkWithMe"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeaderContent />
    <Specialities />
    <Portfolio />
    <WorkWithMe />
    <Testimonials />
  </Layout>
)

export default IndexPage
