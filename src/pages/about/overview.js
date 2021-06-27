import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="OverView" />
    <h1>法人概要 / Foundation Overview</h1>

    <h2>概要</h2>
    <ul>
      <li>目的:&ensp;科学技術に興味関心を寄せる若者に対し、学びの機会を提供すること</li>
      {/* <li>設立年月日:&ensp;2021年6月2日</li> */}
      <li>事業年度:&ensp;毎年6月1日から翌年5月31日まで</li>
      <li>区分:&ensp;非営利型法人(日本の法人税法2条9号の2に定義される一般社団法人)</li>
    </ul>
    <h3>Overview</h3>
    <ul>
      <li>Purpose:&ensp;To offer the chance of learning to young people who interest in technology.</li>
      {/* <li>設立年月日:&ensp;2021年6月2日</li> */}
      <li>Business year::&ensp;From June 1st to the following year, May 31st</li>
      <li>Division:&ensp;Nonprofit cooperation(A general incorporated association which CORPORATION TAX ACT of Japan, Article 2, ix-ii defines)</li>
    </ul>

    <h2>事業内容</h2>
    <ol>
      <li>科学技術に興味関心を寄せる若者への情報共有及び技術支援</li>
      <li>若者への技術支援をするための講師の育成</li>
      <li>各地の学生・生徒への交流の場の提供</li>
      <li>前各号に付帯又は関連する事業</li>
    </ol>
    <h3>Business content</h3>
    <ol>
      <li>To offer technical support to and share information with young people who interest in technology</li>
      <li>To develop instructors who will support young people with technical directions</li>
      <li>To provide students in various places the occasion to communicate and interact</li>
      <li>Businesses associated with and relating to above</li>
    </ol>

    <h2>沿革</h2>
    <ul>
      <li>2021年6月 学生６人により設立</li>
    </ul>
    <h3>History</h3>
    <ul>
      <li>June 2021	Established by six students</li>
    </ul>

  </Layout>
)

export default AboutPage
