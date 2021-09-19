import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import Education from "../components/Education"
// import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Olesia" />
    <Header></Header>
    <Work></Work>
    <Education></Education>
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
  </Layout>
)

export default IndexPage
