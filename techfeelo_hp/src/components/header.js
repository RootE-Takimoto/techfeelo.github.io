//import * as React from "react"
import React from "react"//←「*」の部分を削除
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as Styles from './header.module.css'


import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from "../components/material-ui-color";

import HeaderNav from './header/header-nav.js'
import HeaderMenu from './header/header-tab-menu.js'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `aliceblue`,
      padding: "0",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        // margin: `0 auto`, /* 上下 | 左右 */
        padding: `1.45rem 5% 0.5rem 2rem`, /* 上 | 右 | 下 | 左 */
      }}
    >
      <div>
        <div style={{ width: "20%", display: "inline-block" }}>
          <Link to="/">
            <StaticImage
              src="../images/techfeelo_logo.png"
              // maxWidth={200}
              alt="techfeelo"
            />
          </Link>
        </div>
        <nav className={Styles.nav}>
          <ul className={Styles.menuBar}>
            
            <li className={Styles.li}>
              <HeaderMenu
                title="法人について"
                sub1="概要"
                sub1Link="/about/overview"
                sub2="理事挨拶"
                sub2Link="/about/greeting"
                sub3="役員紹介"
                sub3Link="/about/officers"
              />
            </li>
            <li className={Styles.li}><Button href="/info">お知らせ</Button></li>
            <li className={Styles.li}><Button href="/report">活動報告</Button></li>
            <li className={Styles.li}><Button href="/contact">お問い合わせ</Button></li>
            {/* <li className={Styles.li}><Link className={Styles.button} to="/about/">お知らせ</Link></li>
            <li className={Styles.li}><Link className={Styles.button} to="/report/">活動報告</Link></li>
            <li className={Styles.li}><Link className={Styles.button} to="/contact/">お問い合わせ</Link></li> */}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
