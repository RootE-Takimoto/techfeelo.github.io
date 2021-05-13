import React from 'react'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  groupButton: {
    fontWeight: 600,
    fontSize: "0.7rem",
    color: "#474a4d",
    padding: "0.3rem 0.5rem",
    fontFamily:"source-han-sans-japanese, sans-serif",
    textTransform: "none",
    borderRadius: 0,
  },
}));

const Footer = () => {
  const { root , groupButton } = useStyles();
  return (
    <footer className={root}>
      <ButtonGroup variant="text">
        <Button href={"/legacy/index"} className={groupButton}>Legacy ver</Button>
      </ButtonGroup>
      <p style={{paddingTop:"1rem"}}>一般社団法人 techfeelo</p>
    </footer>
  )
}

export default Footer