import React from 'react'
import Header from '../components/layouts/Header'
import { cors, headers } from '../services/axiosConfig'
import { Container, Grid, CssBaseline, FormControl, InputLabel, Input, Button, TextField, Typography } from '@material-ui/core'
import { makeStyles, withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { indigo, amber, blue, orange } from '@material-ui/core/colors'

const styles = theme => ({
  root: {
    background: theme.palette.common.white,
    color: '#ACF8EB',
    marginTop: '30px',
    boxShadow: theme.shadows[3]
  },
  header: {
    fontWeight: theme.typography.fontWeightBold
  },
  paper: {
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 10%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: theme.shadows[2],
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '20px'
  },
  terms: { 
    fontSize: theme.typography.fontSize,
    color: indigo[800],
    marginTop: '20px'
  }
});

const theme = createMuiTheme({});

class Login extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    user: {
      username: '',
      password: '',
      grant_type: ''
    }
  }

  onSubmit(event){
    event.preventDefault();
    const { user } = this.state;
    
    const response = fetch(cors, {
      method: 'POST',
      headers: headers,
      body: user,
      // mode:'cors',
      // credentials: 'same-origin',
      // 'with-credentials': true
    }).then(response => response.json())
    .catch(err => console.log(err, 'Error defined'))
    .then(jsondata => console.log(jsondata)); 

    console.log(response, 'response');

    /* axios.post('/oauth/token', qs.stringify(user))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); */
  }

  onChange(event){
    const { user } = this.state;
    const { name, value } = event.target;
    const currentState = user;
    currentState[name] = value;
  }

  render(){
    const { classes } = this.props;
    console.log(theme);

    return(
      <React.Fragment>
        <CssBaseline/>
        <Container className={classes.root} component="main" maxWidth="xs">
          <Grid container className={classes.paper} direction="row" justify="center" alignItems="center">
            <Typography className={classes.header} variant="h5" color="textSecondary">
              Private Login
            </Typography>
            
            <form onSubmit={this.onSubmit} className={classes.form}>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input type="text" className="form-control" onChange={this.onChange} name="username" id="username" />
              </FormControl>
              
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input type="password" className="form-control" onChange={this.onChange} name="password" id="password" />
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="grant_type">Grant Type</InputLabel>
                <Input type="text" className="form-control" onChange={this.onChange} name="grant_type" id="grant_type" />
              </FormControl>

              <Button type="submit" variant="contained" color="primary" className={classes.button} size="medium">
                Submit
              </Button>
            </form>

            <Typography component="p" className={classes.terms}>
              By clicking signup, you have agreed to our terms & conditions and are aware of the pitfalls associated with using this app.
            </Typography>
          </Grid>
          
        </Container>


      </React.Fragment>
    );
  }
}

export default withStyles(styles, {withTheme: true})(Login);
