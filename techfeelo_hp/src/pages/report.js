import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Report = () => (
  <Layout>
    <Seo title="Report" />
    <h1>活動報告</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Report