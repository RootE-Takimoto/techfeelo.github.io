import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Box from '@material-ui/core/Box';
import ProfileCard from "../../components/profile-card.js"

const OfficersPage = () => (
  <Layout>
    <Seo title="Officers" />
    <h1>役員紹介</h1>
    <p>techfeeloの役員の紹介です。</p>
    <Box
      style={{
        width: "100%",
        display: "flex",
        frexDirection: "row",
        flexWrap: "wrap",
      }}
      justifyContent="center"
    >
      <ProfileCard
        image="https://pbs.twimg.com/profile_images/1052788598997536768/i6zl4Ycf_400x400.jpg"
        position="代表理事"
        name="Haruka"
        nameRead="Haruka"
        comment="全ての元凶・生き急ぎ野郎"
        link1="https://twitter.com/Haruka2003_exe"
        link1Icon="faTwitter"
      />
      <ProfileCard
        image="https://pbs.twimg.com/profile_images/1114222817304690688/LweKw10r_400x400.jpg"
        position="理事"
        name="ごちうま"
        nameRead="gochiuma"
        comment="限界留年オタク"
        link1="https://twitter.com/gochi_uma"
        link1Icon="faTwitter"
      />
      <ProfileCard
        image="https://pbs.twimg.com/profile_images/1044227092022321152/AN1YhfM4_400x400.jpg"
        position="理事"
        name="paco"
        nameRead="alpaco"
        comment="アクセル"
        link1="https://twitter.com/oakaw_4916"
        link1Icon="faTwitter"
      />
      <ProfileCard
        image="https://pbs.twimg.com/profile_images/1357368000060432393/2pEowwN9_400x400.jpg"
        position="理事"
        name="タキモト"
        nameRead="takimoto"
        comment="広く浅く、バッテリーは燃やす"
        link1="https://twitter.com/ET_RootE"
        link1Icon="faTwitter"
      />
      <ProfileCard
        image="https://pbs.twimg.com/profile_images/1211164253220032512/p-QpXuwa_400x400.jpg"
        position="理事"
        name="しょぼん"
        nameRead="syobon"
        comment="物書きっぽい猫"
        link1="https://twitter.com/syobon_pastel"
        link1Icon="faTwitter"
        link2="https://github.com/syobonpastel"
        link2Icon="faGithub"
        link3="https://syobon-pastel.web.app/"
        link3Icon="faHome"
      />
      <ProfileCard
        image="https://pbs.twimg.com/profile_images/1338548542818795520/JCxXA6R3_400x400.jpg"
        position="監事"
        name="ナキ"
        nameRead="Naki"
        comment="巻き込まれ体質"
        link1="https://twitter.com/Naki817"
        link1Icon="faTwitter"
      />
    </Box>
  </Layout >
)

export default OfficersPage
