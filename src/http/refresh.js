import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import qs from 'query-string'
import { cors } from '../services/axiosConfig'

const AppContext = React.createContext({});

class Refresh extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    canSubmit: false,
    status: '', 
    user: {
      refresh_token: '',
      grant_type: ''
    }
  }

  componentDidMount(){
    console.log("Component Did Mount");
    this.updateState();
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps, "Previous Props");
    console.log(prevState, "Previous State");
    console.log("Component Did Update");
  }

  updateState(e){
    this.setState({status: "updated"});
  }

  onSubmit(event){
    event.preventDefault();
    const { user } = this.state;
    console.log(qs.stringify(user));

    axios.post(cors, qs.stringify(user))
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  onChange(event){
    const { user } = this.state;
    const currentState = user;
    const { name, value } = event.target;
    currentState[name] = value;
    console.log(currentState);
  }

  render(){
    return(
      <AppContext.Provider>
          <button onClick={this.updateState.bind(this)}>Update Component</button>
          <div className="card" style={{width: '18rem', margin: 'auto'}}>
            <div className="card-body">    
                <div className="card-title"><h4>The Refresh Test</h4></div>
                <div className="card-text">
                    <form onSubmit={this.onSubmit} encType="application/x-www-form-urlencoded">
                        <div className="form-group"><input type="text" className="form-control" onChange={this.onChange} name="refresh_token" placeholder="Refresh token" /></div>
                        <div className="form-group"><input type="text" className="form-control" onChange={this.onChange} name="grant_type" placeholder="Grant type" /></div>
                        <div className="form-group"><input type="submit" className="btn btn-secondary" onChange={this.onChange} value="Submit" name="submit" /></div>
                    </form>
                </div>
            </div>
          </div>
      </AppContext.Provider>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    data: {
      name: 'Samwize',
      email: 'saokeke@unionbankng.com',
      age: 30,
    }
  }
}


export default connect(mapStateToProps)(Refresh);
