import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './index.sass';

class Home extends Component {
    useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(100),
        },
    }));

    render(){
        const classes = this.useStyles;
        return(
            <div className = "home">
                <div className="intro">
                    <h4 className="welcome center-block">Welcome Daenerys</h4>
                    <h2 className="secondWelcome center-block">Let's get you covered</h2>
                </div>
                <style name="MyButton" parent="Widget.MaterialComponents.Button.OutlinedButton">
                    <item name="shapeAppearanceOverlay">@style/MyShapeAppearance</item>
                </style>
                <Grid container
                      direction="column"
                      alignItems="stretch"
                >
                    <Button variant="outlined" className={classes.button + ' audreyButton'}>
                        Auto
                    </Button>
                </Grid>
                <Grid container
                      direction="column"
                      alignItems="stretch">
                    <Button variant="outlined" className={classes.button + ' audreyButton'}>
                        Homeowners
                    </Button>
                </Grid>
                <Grid container
                      direction="column"
                      alignItems="stretch">
                    <Button variant="outlined" className={classes.button + ' audreyButton'}>
                        Renters
                    </Button>
                </Grid>
                <Grid container
                      direction="column"
                      alignItems="stretch">
                    <Button variant="outlined" className={classes.button + ' audreyButton'}>
                        Pets
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default Home;