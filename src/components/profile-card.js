import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        maxWidth: 300,
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
    twitter: {
        backgroundColor: "#00acee",
        color:"#ffffff",
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
                <Typography variant="body2" component="p">
                    {prop.comment}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" className={classes.twitter} href={prop.link}>
                    <FontAwesomeIcon icon={faTwitter} />
                </Button>
            </CardActions>
        </Card>
    );
}