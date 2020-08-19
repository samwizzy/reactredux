import React, { memo } from 'react';
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { Grid, Typography, TextField, Button, Divider, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import * as Actions from '../store/actions';

const MyDivider = styled(Divider)({
    background: 'linear-gradient(45deg, #1565c0 30%, #42a5f5 90%)',
    margin: '30px 0',
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        marginTop: theme.spacing(2),
    },
    table: {
        width: '100%',
        overflowX: 'auto',
        minWidth: 650,
    },
}));

const Child = ({signUp, data}) => {
    const [values, setValue] = React.useState({email: '', password: ''})
    const classes = useStyles()

    const handleChange = (name, event) => setValue({...values, [name]: event.target.value})

    const saveData = (data) => signUp(data)

    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <div className={classes.paper}>
                            <TextField
                                id="outlined-name"
                                label="Email"
                                className={classes.textField}
                                value={values.email}
                                onChange={(ev) => handleChange('email', ev)}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-name"
                                label="Password"
                                className={classes.textField}
                                value={values.password}
                                onChange={(ev) => handleChange('password', ev)}
                                margin="normal"
                                variant="outlined"
                            />

                            <Button onClick={() => saveData(values)} variant="outlined" color="primary" className={classes.button} fullWidth>
                                Sign Up
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <MyDivider />
            
            { Object.getOwnPropertyNames(data).length !== 0 &&
                <Table className={classes.table} aria-label="caption table">
                    <caption>A table showing user data from the above signup form</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>Password</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.password}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            }

        </React.Fragment>
    )
} 

const mapStateToProps = ({logReducer}) => {
    console.log(logReducer, "Redux state")
    const { signup } = logReducer
    return { data: signup.data }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signUp: Actions.signUp
    }, dispatch)
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    memo
)(Child)

