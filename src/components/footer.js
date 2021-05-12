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
    fontWeight: 700,
    size: "1rem",
    color: "#474a4d",
    padding: "0.3rem 0.7rem",
  },
}));

const Footer = () => {
  const { root , groupButton } = useStyles();
  return (
    <footer className={root}>
      <ButtonGroup size="small" variant="text">
        <Button href={"/legacy/index"} className={groupButton}>Legacy ver</Button>
      </ButtonGroup>
      <p style={{paddingTop:"1rem"}}>一般社団法人 techfeelo</p>
    </footer>
  )
}

export default Footer