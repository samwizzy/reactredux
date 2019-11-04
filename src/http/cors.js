import React from 'react'
import { Provider } from 'react-redux'
import axios from 'axios'
import { catapi } from '../services/axiosConfig'

const AppContext = React.createContext({});

class Cors extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(catapi).then(response => {
      console.log(response);
    //   this.setState({ persons: response.data });
    });
  }

  static contextType = AppContext;

  render(){
    return(
      <AppContext.Provider>
          <h1>The Cors Test</h1>
      </AppContext.Provider>
    );
  }
}


export default Cors;
