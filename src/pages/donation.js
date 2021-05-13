import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Donation = () => (
  <Layout>
    <Seo title="Donation" />
    <h1>寄付のお願い</h1>
    <p>
      私たちの活動には、多額の資金が必要です。<br />
      そのため、活動の趣旨に賛同してくださる方から広く寄付を募っております。<br />
      寄付をしてくださる方、興味をお持ちの方は、contact@techfeelo.orgまでご連絡ください。
    </p>
  </Layout>
)

export default Donation
