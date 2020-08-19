import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles, Container, Grid, Paper, FormControl, Input, InptLabel } from '@material-ui/core'
import { bindActionCreators } from 'redux';
import * as Actions from './store/actions'
import Child from './components/Child'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

class RedForm extends React.Component {

    componentDidMount(){
        this.props.getLog();
    }


    render(){
        const { classes } = this.props;
        console.log(this.props, "Everything");
        return(
            <Fragment>
                <Container maxWidth="md" component="div" className={classes.root}>
                    {/* <Grid container>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Item</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Item</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Item</Paper>
                        </Grid>
                    </Grid> */}
                    <Child />
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state, "state");
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getLog: Actions.getLog
    }, dispatch);
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RedForm))