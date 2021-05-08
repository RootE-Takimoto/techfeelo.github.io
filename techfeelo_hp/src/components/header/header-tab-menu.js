import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from "../../components/material-ui-color";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(prop) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <MuiThemeProvider theme={theme}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onMouseOver={handleClick}
        onClick={handleClick}
      >
        {prop.title}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        // onClose={handleClose}
      >
        <StyledMenuItem onClose={handleClose}>
            <ListItemLink href={prop.sub1Link}><ListItemText primary={prop.sub1} /></ListItemLink>
        </StyledMenuItem>
        <StyledMenuItem onClose={handleClose}>
          {/* <ListItemText primary={prop.sub2} /> */}
          <ListItemLink href={prop.sub2Link}><ListItemText primary={prop.sub2} /></ListItemLink>
        </StyledMenuItem>
        <StyledMenuItem onClose={handleClose}>
          {/* <ListItemText primary={prop.sub3} /> */}
          <ListItemLink href={prop.sub3Link}><ListItemText primary={prop.sub3} /></ListItemLink>
        </StyledMenuItem>
      </StyledMenu>
      </MuiThemeProvider>
    </div>
  );
}