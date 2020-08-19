import React, {Fragment} from 'react'
import { withStyles, Grid, Typography, Divider } from '@material-ui/core'

const styles = theme => ({
    root: {
        height: '100vh'
    }
});

class NotFound extends React.Component {

    render() {
        const {classes} = this.props

        return (
            <Fragment>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.root}
                >
                    <Grid item>
                        <Typography variant="h4">
                            404 Not Found
                        </Typography>
                        <Divider  />
                        <Typography variant="subtitle1">
                            This page does not exist or has been moved to another location
                        </Typography>
                        <Typography variant="caption">
                            You may report to the host, let them know their link is broken
                        </Typography>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(NotFound)