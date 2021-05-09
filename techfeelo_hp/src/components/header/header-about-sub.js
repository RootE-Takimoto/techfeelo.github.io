import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
            className={classes.root}
        >
            <ListItem button onClick={handleClick}>
                techfeeloとは
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to={"/about/overview"} color="primary">法人概要</ListItem>
                    <ListItem button className={classes.nested} component={Link} to={"/about/greeting"} color="primary">代表理事挨拶</ListItem>
                    <ListItem button className={classes.nested} component={Link} to={"/about/officers"} color="primary">役員紹介</ListItem>
                </List>
            </Collapse>
            <ListItem button component={Link} to={"/info"} color="primary">お知らせ</ListItem>
            <ListItem button component={Link} to={"/report"} color="primary">活動報告</ListItem>
        </List>
    );
}
