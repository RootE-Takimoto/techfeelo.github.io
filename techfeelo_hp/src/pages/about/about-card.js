import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        maxWidth: 275,
        margin: 10
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
});

export default function SimpleCard(prop) {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    //   const position = "理事";
    //   const name = "hoge";

    return (
        <Card className={classes.root}>
            {/* <CardMedia
                className={classes.media}
                image={prop.image}
                title="profile-icon"
            /> */}
            <CardContent>
                <Typography variant="h5" component="h2">
                    <Button href={prop.link}>{prop.title}</Button>
                </Typography>
                <Typography variant="body2" component="p">
                    {prop.explanation}
                </Typography>
            </CardContent>
        </Card>
    );
}