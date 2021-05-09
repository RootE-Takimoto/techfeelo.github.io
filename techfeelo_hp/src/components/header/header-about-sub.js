import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Nested List Items
    //     </ListSubheader>
    //   }
      className={classes.root}
    >
        <ListItem button component={Link} to={"/info"} color="primary"  onClick={handleClick}>お知らせ</ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem> */}
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}


// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';

// const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

// export default function SplitButton() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleClick = () => {
//     console.info(`You clicked ${options[selectedIndex]}`);
//   };

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setOpen(false);
//   };

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <Grid container direction="column" alignItems="center">
//       <Grid item xs={12}>
//         <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
//           <Button onClick={handleClick}>{options[selectedIndex]}</Button>
//           <Button
//             color="primary"
//             size="small"
//             aria-controls={open ? 'split-button-menu' : undefined}
//             aria-expanded={open ? 'true' : undefined}
//             aria-label="select merge strategy"
//             aria-haspopup="menu"
//             onClick={handleToggle}
//           >
//             <ArrowDropDownIcon />
//           </Button>
//         </ButtonGroup>
//         <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList id="split-button-menu">
//                     {options.map((option, index) => (
//                       <MenuItem
//                         key={option}
//                         disabled={index === 2}
//                         selected={index === selectedIndex}
//                         onClick={(event) => handleMenuItemClick(event, index)}
//                       >
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </Grid>
//     </Grid>
//   );
// }