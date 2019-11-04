import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles'
import { pink, indigo } from '@material-ui/core/colors'
import { CssBaseline } from '@material-ui/core'
import { createGenerateClassName, jssPreset } from '@material-ui/styles'
import JssProvider from 'react-jss/lib/JssProvider'
import {create} from 'jss'
import jssExtend from 'jss-extend'
// import './index.css'
import { LoginUser, addCounter, addTodo } from './store/actions'
import { bindActionCreators } from 'redux'
import AxiosTest from './http/axios'
import Cors from './http/cors'
import Login from './http/login'
import Todo from './components/todo/Todo';
import CustomForm from './components/CustomForm';
import Param from './components/Param';
import Refresh from './http/refresh';
import Material from './components/Material'
import MaterialEditor from './components/MaterialEditor'
import MaterialTableDemo from './components/MaterialTableDemo'
import UseStyles from './components/UseStyles'
import Website from './components/Website'
import RedForm from './components/redux'
import Children from './components/Children'
import Test from './components/Test'
import RightMap from './components/RightMap'
import Spinner from './components/Spinner'
import ParentComp from './components/components/ParentComp'
import _ from 'lodash'
import AppContext from './services/context'

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

class App extends React.Component {
  render(){
    return(
      <AppContext.Provider value="dark">
        <CssBaseline />
        {/* <JssProvider jss={jss} generateClassName={generateClassName}> */}
        <Router>
          <Children>
            <Switch>
                <Route exact path="/" component={Todo} />
                <Route path="/custom" component={CustomForm} />
                <Route path="/refresh" component={Refresh} />
                <Route path="/param/:id" component={Param} />
                <Route path="/material" component={Material} />
                <Route path="/editor" component={MaterialEditor} />
                <Route path="/tabledemo" component={MaterialTableDemo} />
                <Route path="/usestyles" component={UseStyles} />
                <Route path="/website" render={(props) => <Website {...props} isAuth={true} />} />
                <Route path="/login" component={Login} />
                <Route path="/redform" component={RedForm} />
                <Route path="/test" component={Test} />
                <Route path="/rightmap" component={RightMap} />
                <Route path="/spinner" component={Spinner} />
                <Route path="/parentcomp" component={ParentComp} />
                <Route path="" component={Todo} />
            </Switch>
          </Children>
        </Router>
        {/* </JssProvider> */}
      </AppContext.Provider>
    );
  }
}

export default App;
