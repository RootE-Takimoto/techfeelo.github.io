import * as React from "react"
import { useState, useEffect } from "react";

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Menu from 'material-ui-popup-state/HoverMenu'
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks'

import { ButtonGroup, AppBar, Toolbar, makeStyles, Button, IconButton, Drawer, MenuItem, List, ListItem, Collapse } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#ffffff",
    "@media (min-width: 1200px)": {
      paddingRight: "10%",
      paddingLeft: "10%",
      paddingTop: "1.7rem",
      marginBottom: "2rem",
    },
    "@media (max-width: 1200px)": {
      paddingRight: "3%",
      paddingLeft: "5%",
      paddingTop: "1rem",
      marginBottom: "2rem",
    },
    "@media (max-width: 960px)": {
      paddingLeft: 0,
      paddingTop: 0,
      marginBottom: "0rem",
    },
  },
  groupButton: {
    borderRadius: 0,
    fontWeight: 600,
    size: "1rem",
    color: "#474a4d",
    padding: "0.3rem 0.7rem",
    fontFamily:"source-han-sans-japanese, sans-serif",
    textTransform: "none",
  },
  iconButton:{
    color: "#474a4d" 
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "1rem 1rem",
  },
  root: {
    width: '350px',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    fontFamily:"source-han-sans-japanese, sans-serif",
    padding: "1rem",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#F5F5F5",
      borderRadius: 0,
    }
  },
  menuItem: {
    fontSize: "0.8rem",
  }
}));

export default function Header() {
  const { header, toolbar, root, nested, menu, menuItem, groupButton, iconButton } = useStyles();

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
        <div style={{ 
          minWidth: "7rem",
          width: "20%",
          margin: "0" /* ??? | ??? | ??? | ??? */
        }}>
          <Link to="/">
            <StaticImage
              src="../images/techfeelo_logo.png"
              minWidth={300}
              alt="techfeelo"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              placeholder="white"
            />
          </Link>
        </div>
        <ButtonGroup variant="text">
          <Button className={groupButton} {...bindHover(popupState)} component={Link} to={"/about"}>About Us</Button>
          <Menu
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            elevation='none'
            className={menu}
          >
            <MenuItem className={menuItem} onClick={popupState.close} component={Link} to="/about/overview">???????????? / Foundation Overview</MenuItem>
            <MenuItem className={menuItem} onClick={popupState.close} component={Link} to="/about/greeting">?????????????????? / Greeting</MenuItem>
            <MenuItem className={menuItem} onClick={popupState.close} component={Link} to="/about/officers">???????????? / Officers</MenuItem>
            <MenuItem className={menuItem} onClick={popupState.close} component={Link} to="/about/public_notice">?????? / Public Announcements</MenuItem>
          </Menu>
          <Button component={Link} to={"/info"} className={groupButton}>Infomations</Button>
          <Button component={Link} to={"/report"} className={groupButton}>Reports</Button>
          <Button component={Link} to={"/donation"} className={groupButton}>Donation</Button>
          <Button component={Link} to={"/contact"} className={groupButton}>Contact</Button>
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
          className={iconButton}
          {...{
            edge: "start",
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
              About Us
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={nested} component={Link} to={"/about/overview"} onClick={handleDrawerClose}>???????????? / Foundation Overview</ListItem>
                <ListItem button className={nested} component={Link} to={"/about/greeting"} onClick={handleDrawerClose}>?????????????????? / Greeting</ListItem>
                <ListItem button className={nested} component={Link} to={"/about/officers"} onClick={handleDrawerClose}>???????????? / Officers</ListItem>
                <ListItem button className={nested} component={Link} to={"/about/public_notice"} onClick={handleDrawerClose}>?????? / Public Announcements</ListItem>
              </List>
            </Collapse>
            <ListItem button component={Link} to={"/info"} onClick={handleDrawerClose}>Infomations</ListItem>
            <ListItem button component={Link} to={"/report"} onClick={handleDrawerClose}>Reports</ListItem>
            <ListItem button component={Link} to={"/donation"} onClick={handleDrawerClose}>Donation</ListItem>
            <ListItem button component={Link} to={"/contact"} onClick={handleDrawerClose}>Contact</ListItem>
          </List>
        </Drawer>

        <div>
          <div style={{ minWidth: "7rem", width: "20%", margin: "1rem 0 0.6rem 0.5rem" /* ??? | ??? | ??? | ??? */ }}>
            <Link to="/">
              <StaticImage
                src="../images/techfeelo_logo.png"
                minWidth={200}
                alt="techfeelo"
                placeholder="white"
              />
            </Link>
          </div>
        </div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar className={header} position="static" elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
