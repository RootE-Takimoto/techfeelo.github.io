import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Box from '@material-ui/core/Box';
import AboutCard from "../components/about-card.js"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>techfeelo とは</h1>
    <Box
      style={{
        width: "100%",
        display: "flex",
        frexDirection: "row",
        flexWrap: "wrap"
      }}
    >
    <AboutCard
      title="法人概要"
      explanation="目的や沿革などをご紹介いたします。"
      link="/about/overview"
    />
    <AboutCard
      title="理事挨拶"
      explanation="一般社団法人techfeelo代表理事、Harukaからご挨拶です。"
      link="/about/greeting"
    />
    <AboutCard
      title="役員紹介"
      explanation="一般社団法人techfeeloの役員をご紹介いたします。"
      link="/about/officers"
    />
    <AboutCard
      title="公告"
      explanation="公告はこちらに掲載しております。"
      link="/about/public_notice"
    />
    </Box>
  </Layout>
)

export default AboutPage
