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
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <ButtonGroup size="small" variant="text" color="primary">
        <Button href={"/legacy/index"}>Legacy ver</Button>
      </ButtonGroup>
      <p>一般社団法人 techfeelo</p>
    </footer>
  )
}

export default Footer