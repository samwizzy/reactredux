import React from 'react'
import { Paper, FormControl, InputLabel, Input, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import _ from 'lodash';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    fontWeight: theme.typography.fontWeightBold
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: theme.spacing(4),
    textAlign: 'center',
    width: 400
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 10%, #FF8E53 90%)',
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[2],
    padding: theme.spacing(1.3, 4),
    marginTop: theme.spacing(3)
  },
  terms: {
    fontSize: theme.typography.fontSize - 1,
    color: grey[500],
    marginTop: theme.spacing(2)
  }
});

class Login extends React.Component {
  constructor(props, context) {
    super(props);

    this.state = {
      user: {
        username: '',
        password: '',
        grant_type: ''
      }
    }
  }

  onSubmit = (event) => {
    const { user } = this.state;
  }

  onChange = (event) => {
    this.setState({ user: _.set(this.state.user, event.target.name, event.target.value) })
  }

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    console.log(user, "user form")

    return (
      <React.Fragment>
        <div className={classes.grid}>
          <Paper className={classes.form} square>
            <Typography className={classes.header} variant="h5" color="textSecondary">
              Private Login
            </Typography>

            <div>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input inputProps={{ autoComplete: 'off' }} className="form-control" onChange={this.onChange} name="username" id="username" />
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input type="password" className="form-control" onChange={this.onChange} name="password" id="password" />
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="grant_type">Grant type</InputLabel>
                <Input className="form-control" onChange={this.onChange} name="grant_type" id="grant_type" />
              </FormControl>

              <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit}>
                Submit
              </Button>
            </div>

            <Typography variant="body2" className={classes.terms}>
              By clicking signup, you have agreed to our terms & conditions and are aware of the pitfalls associated with using this app.
            </Typography>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Login);
