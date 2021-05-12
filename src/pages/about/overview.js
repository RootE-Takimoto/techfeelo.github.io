import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="OverView" />
    <h1>法人概要</h1>

    <h2>概要</h2>
    <ul>
      <li>目的:&ensp;科学技術に興味関心を寄せる若者に対し、学びの機会を提供すること</li>
      <li>設立年月日:&ensp;2021年6月1日</li>
      <li>事業年度:&ensp;毎年6月1日から翌年5月31日まで</li>
      <li>区分:&ensp;非営利型法人(日本の法人税法2条9号の2に定義される一般社団法人)</li>
    </ul>

    <h2>事業内容</h2>
    <ol>
      <li>科学技術に興味関心を寄せる若者への情報共有及び技術支援</li>
      <li>若者への技術支援をするための講師の育成</li>
      <li>各地の学生・生徒への交流の場の提供</li>
      <li>前各号に付帯又は関連する事業</li>
    </ol>

    <h2>沿革</h2>
    <ul>
      <li>2021年6月 学生６人により設立</li>
    </ul>
  </Layout>
)

export default AboutPage
