import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#0066ff',
            main: '#1DA1F2',
        },
    },
});

const useStyles = makeStyles({
    button: {
        marginBottom: 5,
        marginLeft: 10,
    },
});

export default function SimpleCard(prop) {
    const classes = useStyles();
    if (prop.link !== undefined) {
        if (prop.icon === "faTwitter") {
            return (
                <ThemeProvider theme={theme}>
                    <IconButton href={prop.link} color="primary" rel="noopener noreferrer" target="_ blank" size="small" className={classes.button}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </IconButton>
                </ThemeProvider>
            );
        } else if (prop.icon === "faHome") {
            return (
                <IconButton href={prop.link} color="primary" rel="noopener noreferrer" target="_ blank" size="small" className={classes.button} style={{ color: "#708090" }}>
                    <FontAwesomeIcon icon={faHome} />
                </IconButton>
            );
        } else if (prop.icon === "faGithub") {
            return (
                <IconButton href={prop.link} color="primary" rel="noopener noreferrer" target="_ blank" size="small" className={classes.button} style={{ color: "#24292e" }}>
                    <FontAwesomeIcon icon={faGithub} />
                </IconButton>
            );
        }
    } else {
        return (<div />)
    }
}