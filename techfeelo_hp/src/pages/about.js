import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Box from '@material-ui/core/Box';
import AboutCard from "./about/about-card.js"

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
        title="団体概要"
        explanation="hogehoge"
        link="overview"
      />
      <AboutCard
        title="理事挨拶"
        explanation="hogehoge"
        link="greeting"
      />
      <AboutCard
        title="役員紹介"
        explanation="hogehoge"
        link="officers"
      />
    </Box>
  </Layout>
)

export default AboutPage
