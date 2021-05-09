import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  // Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react"
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link as RouterLink, MemoryRouter as Router } from "react-router-dom";

import { Link } from "gatsby"

import Menu from 'material-ui-popup-state/HoverMenu'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'

// import HeaderMenu from './header/header-tab-menu.js'
import { Box } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import HeaderMenu from './header/header-about-sub.js'

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#ffffff",
    paddingRight: "10%",
    paddingLeft: "5%",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontWeight: 700,
    size: "1rem",
    marginLeft: "2rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "1rem 1rem",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {techfeeloLogo}
        <ButtonGroup>
          <Button variant="contained" {...bindHover(popupState)} href={"/about"} color="primary">
            techfeeloとは
          </Button>
          <Menu
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <MenuItem onClick={popupState.close} component={Link} to="/about/overview">法人概要</MenuItem>
            <MenuItem onClick={popupState.close} component={Link} to="/about/greeting">代表理事挨拶</MenuItem>
            <MenuItem onClick={popupState.close} component={Link} to="/about/officers">役員紹介</MenuItem>
          </Menu>
          <Button href={"/info"} color="primary">
            お知らせ
          </Button>
          <Button href={"/report"} color="primary">
            活動報告
          </Button>
          <Button href={"/contact"} color="primary">
            お問い合わせ
          </Button>
        </ButtonGroup>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "primary",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <HeaderMenu />
          {/* <List>
            <ListItem button component={Link} to={"/info"} color="primary">お知らせ</ListItem>
          </List> */}
          {/* <ButtonGroup orientation="vertical">
            <HeaderMenu />
            <Button href={"/info"} color="primary">
              お知らせ
            </Button>
            <Button href={"/report"} color="primary">
              活動報告
            </Button>
            <Button href={"/contact"} color="primary">
              お問い合わせ
            </Button>
          </ButtonGroup> */}
          {/* <div className={drawerContainer}>{getDrawerChoices()}</div>  */}
          {/* ここをベタ打ち（関数使わないで書く→そのあと役員紹介など下位構造を追加/Split buttonかなんか使うと良さげ…？） */}
        </Drawer>

        <div>{techfeeloLogo}</div>
      </Toolbar>
    );
  };

  // const getDrawerChoices = () => {
  //   const preventDefault = (event) => event.preventDefault();
  //   return headersData.map(({ label, href, nest }) => {
  //     return (
  //       <Link
  //         href={href} //onClick={preventDefault}
  //         {...{
  //           //   component: RouterLink,
  //           //   to: href,
  //           color: "inherit",
  //           style: { textDecoration: "none" },
  //           key: label,
  //         }}
  //       >
  //         <MenuItem>{label}</MenuItem>
  //       </Link>
  //     );
  //   });
  // };

  const techfeeloLogo = (
    <div style={{ minWidth: "7rem", width: "20%", margin: "0.5rem" }}>
      <StaticImage
        src="../images/techfeelo_logo.png"
        minWidth={200}
        alt="techfeelo"
      />
    </div>
    // <Typography variant="h6" component="h1" className={logo}>
    //   Femmecubator
    // </Typography>
  );

  // const getMenuButtons = () => {
  //   return headersData.map(({ label, href, nest }) => {
  //     return (
  //       <Button href={href} color="primary">
  //         {label}
  //       </Button>
  //     );
  //   });
  // };

  return (
    <header>
      <AppBar className={header} position="static">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

// //import * as React from "react"
// import React from "react"//←「*」の部分を削除
// import PropTypes from "prop-types"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import * as Styles from './header.module.css'


// import Button from '@material-ui/core/Button';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import { theme } from "../components/material-ui-color";

// import HeaderNav from './header/header-nav.js'
// import HeaderMenu from './header/header-tab-menu.js'

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `aliceblue`,
//       padding: "0",
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         // margin: `0 auto`, /* 上下 | 左右 */
//         padding: `1.45rem 5% 0.5rem 2rem`, /* 上 | 右 | 下 | 左 */
//       }}
//     >
//       <div>
//         <div style={{ width: "20%", display: "inline-block" }}>
//           <Link to="/">
//             <StaticImage
//               src="../images/techfeelo_logo.png"
//               // maxWidth={200}
//               alt="techfeelo"
//             />
//           </Link>
//         </div>
//         <nav className={Styles.nav}>
//           <ul className={Styles.menuBar}>

//             <li className={Styles.li}>
//               <HeaderMenu
//                 title="法人について"
//                 sub1="概要"
//                 sub1Link="/about/overview"
//                 sub2="理事挨拶"
//                 sub2Link="/about/greeting"
//                 sub3="役員紹介"
//                 sub3Link="/about/officers"
//               />
//             </li>
//             <li className={Styles.li}><Button href="/info">お知らせ</Button></li>
//             <li className={Styles.li}><Button href="/report">活動報告</Button></li>
//             <li className={Styles.li}><Button href="/contact">お問い合わせ</Button></li>
//             {/* <li className={Styles.li}><Link className={Styles.button} to="/about/">お知らせ</Link></li>
//             <li className={Styles.li}><Link className={Styles.button} to="/report/">活動報告</Link></li>
//             <li className={Styles.li}><Link className={Styles.button} to="/contact/">お問い合わせ</Link></li> */}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
