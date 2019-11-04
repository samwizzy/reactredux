import React from 'react'
import { Provider } from 'react-redux'
import axios from 'axios'

const AppContext = React.createContext({});

const api = `https://jsonplaceholder.typicode.com/users`;

class AxiosTest extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(api).then(response => {
      console.log(response);
      this.setState({ persons: response.data });
    });
  }

  static contextType = AppContext;

  render(){
    return(
      <AppContext.Provider>
          <h1>The Person List</h1>
          <p style={{color:this.context}}>Paragraph</p>
          <ul>
            {this.state.persons.map(person => {
              return (<li key={person.id}>{person.name}</li>)
            })}
          </ul>
      </AppContext.Provider>
    );
  }
}


export default AxiosTest;
