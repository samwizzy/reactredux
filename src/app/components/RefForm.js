import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  },
  button: {
    marginRight: theme.spacing(1)
  }
});

class RefForm extends React.Component{

  state = {
    form: {
      firstName: '',
      lastName: ''
    }
  }

  stateChange = (event, name) => {
    const { value } = event.target;
    this.setState({form: _.set(this.state.form, name, value)});
  }

  onSubmit = () => {
    console.log(this.firstName.value, 'Firstname echoed!')
  }

  handleChange = (e) => {
    const { name, value }= e.target
    const { form } = this.state

    const formClone = Object.assign({}, form)
    formClone.firstName = value
    formClone.lastName = 'okeke';

    // this.setState({form: _.set(this.state.form, 'firstName', value)});
    // this.setState({form: _.set(this.state.form, 'lastName', 'chukwubunna')});
    this.setState({form: formClone})

  }

  onKeyUp = (e) => {
    console.log(e.keyCode, 'KeyCode')
  }

  render(){

    const { form } = this.state;

    console.log(form);
    return(
      <Fragment>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5">
              Form Ref
            </Typography>

            <p>
              <input
                name='firstName'
                type='text' 
                value={form.firstName}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                name='lastName'
                type='text' 
                value={form.lastName}
                onChange={this.handleChange}
              />
            </p>
            <p><button type='submit' onClick={this.onSubmit}>Submit</button></p>
            
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
  
export default withStyles(styles, {withTheme: true})(withRouter((RefForm)));