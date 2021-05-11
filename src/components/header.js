import { AppBar, Toolbar, makeStyles, Button, IconButton, Drawer, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react"
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

import Menu from 'material-ui-popup-state/HoverMenu'
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks'

import { ButtonGroup } from "@material-ui/core";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
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
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer, root, nested } = useStyles();

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
        <ButtonGroup variant="text">
          <Button color="primary" {...bindHover(popupState)} href={"/about"}>techfeeloとは</Button>
          <Menu
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            elevation='none'
          >
            <MenuItem onClick={popupState.close} component={Link} to="/about/overview">法人概要</MenuItem>
            <MenuItem onClick={popupState.close} component={Link} to="/about/greeting">代表理事挨拶</MenuItem>
            <MenuItem onClick={popupState.close} component={Link} to="/about/officers">役員紹介</MenuItem>
          </Menu>
          <Button href={"/info"} color="primary">お知らせ</Button>
          <Button href={"/report"} color="primary">活動報告</Button>
          <Button href={"/donation"} color="primary">寄付のお願い</Button>
          <Button href={"/contact"} color="primary">お問い合わせ</Button>
        </ButtonGroup>
      </Toolbar>
    );
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
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
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={root}
          >
            <ListItem button onClick={handleClick}>
              techfeeloとは
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={nested} component={Link} to={"/about/overview"} color="primary" onClick={handleDrawerClose}>法人概要</ListItem>
                <ListItem button className={nested} component={Link} to={"/about/greeting"} color="primary" onClick={handleDrawerClose}>代表理事挨拶</ListItem>
                <ListItem button className={nested} component={Link} to={"/about/officers"} color="primary" onClick={handleDrawerClose}>役員紹介</ListItem>
              </List>
            </Collapse>
            <ListItem button component={Link} to={"/info"} color="primary" onClick={handleDrawerClose}>お知らせ</ListItem>
            <ListItem button component={Link} to={"/report"} color="primary" onClick={handleDrawerClose}>活動報告</ListItem>
          </List>
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
      <AppBar className={header} position="static" elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}