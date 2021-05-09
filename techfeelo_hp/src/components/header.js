import { AppBar, Toolbar, makeStyles, Button, IconButton, Drawer, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react"
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

import Menu from 'material-ui-popup-state/HoverMenu'
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks'

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
          <Button href={"/info"} color="primary">お知らせ</Button>
          <Button href={"/report"} color="primary">活動報告</Button>
          <Button href={"/contact"} color="primary">お問い合わせ</Button>
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
        </Drawer>

        <div>{techfeeloLogo}</div>
      </Toolbar>
    );
  };

  const techfeeloLogo = (
    <div style={{ minWidth: "7rem", width: "20%", margin: "0.5rem" }}>
      <Link to="/">
        <StaticImage
          src="../images/techfeelo_logo.png"
          minWidth={200}
          alt="techfeelo"
        />
      </Link>
    </div>
  );

  return (
    <header>
      <AppBar className={header} position="static">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}