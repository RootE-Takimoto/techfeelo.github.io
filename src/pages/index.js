import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={{
      textAlign:"center",
      margin: "5rem",
    }}>
      <h1 style={{fontSize: "2.5rem"}}>つよつよがげきつよになるために</h1>
      <h2 style={{fontSize: "1.5rem"}}>Tsuyotuyo ga gekitsuyo ni narutame ni</h2>
    </div>
  </Layout>
)

export default IndexPage
