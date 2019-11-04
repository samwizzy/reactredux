import React, { Component, Fragment, useState } from 'react'
import {Container, Grid, Box, Divider, MenuItem, FormHelperText, Button, Select, Typography, FormControl, InputLabel, Input, TextField} from '@material-ui/core'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { amber } from '@material-ui/core/colors'
import { withStyles, styled } from '@material-ui/core/styles'

const Divide = styled(Divider)({
  border: 0,
  height: '1px',
  background: '#cccccc',
  margin: '40px 0',
});


const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
  },
  divider: {
    margin: '20px 0',
  },
  button: {
    marginRight: theme.spacing(1)
  }
});

function Test (){

  const [state, setState] = useState({
    form: {
      age: [],
      packs: []
    }
  })

  const stateChange = (event, name) => {
    const { value } = event.target;
    setState({form: _.set(state.form, name, value)});
  }

  const { form } = state;

  console.log(form);
  return(
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            Test Component
          </Typography>

          <Divide variant="middle" component="hr" />

          <form>
            <FormControl fullWidth>
              <InputLabel htmlFor="test">Age</InputLabel>
              <Select
                multiple={true}
                value={form.age}
                onChange={(age) => stateChange(age, "age")}
                input={<Input name="age" id="test" />}
                variant="outlined"
                margin="dense"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
          </form>
        </Grid>
      </Grid>

      <Divide variant="middle" component="hr" />
    </Fragment>
  );
  
}

class CustomForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { values: [] };
    }
  
    createUI(){
      return this.state.values.map((el, i) => 
          <Box key={i} my={2}>
            <FormControl>
              <InputLabel htmlFor="">Username</InputLabel>
              <Input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
            </FormControl>  
            <Button type='button' onClick={this.removeClick.bind(this, i)}>Remove</Button>
          </Box>          
      ) 
    }
  
    handleChange(i, event) {
       let values = [...this.state.values];
       values[i] = event.target.value;
       this.setState({ values });
    }
    
    addClick(){
      this.setState(prevState => ({ values: [...prevState.values, '']}))
    }
    
    removeClick(i){
       let values = [...this.state.values];
       values.splice(i,1);
       this.setState({ values });
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.values.join(', '));
      event.preventDefault();
    }
  
    render() {
      const { classes } = this.props;
      console.log(this.props, "All");
      return (
        <Container component="div" maxWidth="sm">
          <Test />
          <form onSubmit={this.handleSubmit} style={{margin:'30px 0'}}>
              {this.createUI()} 
              <FormControl>   
                <Button className={classes.button} variant="contained" color="secondary" type='button' id="more" onClick={this.addClick.bind(this)}>
                  Add more
                </Button>
              </FormControl>
              <Button variant="contained" color="primary" type="submit">Submit</Button>
          </form>
        </Container>
      );
    }
}
  
export default withStyles(styles, {withTheme: true})(withRouter((CustomForm)));