import React from 'react'
import { connect } from 'react-redux'
import { Container, CssBaseline, Grid, FormControl, Paper, Badge, Input, Box, InputLabel, BottomNavigation, BottomNavigationAction, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Restore, Favorite, LocationOn, Mail } from '@material-ui/icons'
import axios from 'axios'
import qs from 'query-string'
import { LoginUser, addCounter, addTodo, getUsers } from './store/actions'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

const AppContext = React.createContext({});

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, ' + theme.palette.common.white + ' 70%, #EEEEEE 80%)',
    padding: theme.spacing(3, 2),  
    marginTop: '0'
  }
});

class Todo extends React.Component {
  constructor(props){
    super(props);
    // this.addTodo = this.addTodo.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    user: {
      username: '',
      password: ''
    },
    count: this.props.count,
    value: 0
  }

  componentDidMount(){
    this.props.getUsers();
    // this.props.addCounter();
  }

  handleTodo(e){
    e.preventDefault(); 
    this.props.addCounter();
  }

  addTodo(e){
    this.props.addTodo('content');
  }

  saveValue(e, name){
    console.log(name, "Name");
  }

  onChange = (e) => {
    const name = e.target.name;
    if(name === 'username')
      this.setState({user: { [name]: e.target.value, password: this.state.user.password }});
    else
      this.setState({user: { username: this.state.user.username, [name]: e.target.value }});
  }

  onSubmit(e){
    const { user } = { ...this.state };
    user.grant_type = "password";
    this.props.login(user);
    console.log(user);
    console.log(qs.stringify(user));

    axios.post('/oauth/token', qs.stringify(user))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    e.preventDefault();
  }

  render(){
    const { classes, count } = this.props;
   
    return(
      <React.Fragment> 
        <Paper className={classes.root}>     

          <Box my={2}>
            <Typography variant="h3">
              <Badge badgeContent={count} color="secondary">
                <Mail />
              </Badge>
            </Typography>
          </Box>  
          

          <Button variant="contained" color="primary" onClick={this.handleTodo}>Button Press</Button>
          <Button variant="contained" color="secondary" onClick={(e) => this.addTodo(e)}>Add Todo</Button>

          <Typography>Login Form</Typography>

          <form onSubmit={this.onSubmit} method="post">
            <FormControl fullWidth>
              <Input type="text" name="username" value={this.state.user.username} onChange={this.onChange} />
            </FormControl>
            <FormControl fullWidth>
              <Input type="password" name="password" value={this.state.user.password} onChange={this.onChange} />
            </FormControl>
            
            <div>
              <Button variant="contained" color="primary" type="submit">Login</Button>
            </div>  
            
          </form>
          

          <BottomNavigation
            value={this.state.value}
            onChange={(event, newValue) => {
              this.setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction label="Recents" icon={<Restore />} />
            <BottomNavigationAction label="Favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
          </BottomNavigation>
        </Paper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({todoReducer}) => {
  console.log(todoReducer, "Todo map");
  const { todo } = todoReducer;
  return {
    count: todo.count 
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login      : (user) => dispatch(LoginUser(user)),
    addCounter : () => dispatch(addCounter()),
    addTodo    : (data) => dispatch(addTodo(data)),
    getUsers   : () => dispatch(getUsers())
  };
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Todo));
