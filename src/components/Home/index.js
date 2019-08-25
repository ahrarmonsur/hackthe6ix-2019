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
                <Typography variant="h6" gutterBottom>
                    Welcome Daenerys
                </Typography>
                <Typography variant="h4">
                    Let's get you covered
                </Typography>
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