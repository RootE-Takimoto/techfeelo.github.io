//import * as React from "react"
import React from "react"//←「*」の部分を削除
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as Styles  from './header.module.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `aliceblue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <StaticImage
            src="../images/techfeelo_logo.png"
            width={300}
            alt="techfeelo"
          />
          {/*{siteTitle}*/}
        </Link>
      </h1>
      <h2 className={Styles.button}>
        <Link to="/about/">about</Link>
        <Link to="/officers/">役員紹介</Link>
      </h2>
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
