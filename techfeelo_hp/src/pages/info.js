import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const OfficersPage = () => (
  <Layout>
    <Seo title="Infomation" />
    <h1>お知らせ</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default OfficersPage
