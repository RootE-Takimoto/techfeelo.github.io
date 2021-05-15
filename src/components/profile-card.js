import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ProfileLink from "./profile-card-button.js"

const useStyles = makeStyles({
    root: {
        width: 270,
        // minWidth: 250,
        // maxWidth: 300,
        margin: 15,
    },
    media: {
        paddingTop: '100%', // アスペクト比
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    comment: {
        fontSize: "0.8rem",
        width: 250,
        marginLeft: "auto",
        marginRight: "auto",
    },
    button: {
        marginBottom: 5,
        marginLeft: 10,
    },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#0066ff',
            main: '#1DA1F2',
        },
    },
});

export default function SimpleCard(prop) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={prop.image}
                title="profile-icon"
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {prop.position}
                </Typography>
                <Typography variant="h5" component="h2">
                    {prop.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {prop.nameRead}
                </Typography>
                <Box className={classes.comment}>
                    <Typography variant="body2" component="p">
                        {prop.comment}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <ProfileLink link={prop.link1} icon={prop.link1Icon} />
                <ProfileLink link={prop.link2} icon={prop.link2Icon} />
                <ProfileLink link={prop.link3} icon={prop.link3Icon} />
                <ProfileLink link={prop.link4} icon={prop.link4Icon} />
            </CardActions>
        </Card>
    );
}