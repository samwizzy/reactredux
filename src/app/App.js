import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { createGenerateClassName, jssPreset } from '@material-ui/styles'
import JssProvider from 'react-jss/lib/JssProvider'
import {create} from 'jss'
import jssExtend from 'jss-extend'
import { SoTheme, SoLayout, SoAuthentication } from './@samwize'
import routes from './so-config/routesConfig'
// import Login from './main/login/Login'
// import NotFound from './main/notFound/NotFound'
// import Todo from './components/todo/Todo'
// import CustomForm from './components/CustomForm'
// import RefForm from './components/RefForm'
// import Param from './components/Param'
// import Material from './components/Material'
// import MaterialEditor from './components/MaterialEditor'
// import MaterialTableDemo from './components/MaterialTableDemo'
// import UseStyles from './components/UseStyles'
// import Website from './components/Website'
// import RedForm from './components/redux'
// import Test from './components/Test'
// import Elem from './components/Elem'
// import RightMap from './components/RightMap'
// import Spinner from './components/Spinner'
// import ParentComp from './components/components/ParentComp'
import AppContext from './utils/AppContext'
import history from './utils/history'
// import PrivateRoute from './utils/PrivateRoute'

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

class App extends React.Component {
  render(){

    return(
      <AppContext.Provider value={routes}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <Router history={history}>
            <SoTheme>
              <SoLayout>
              <SoAuthentication>
              <Switch>
                {renderRoutes(routes)}
                {/* <PrivateRoute exact path="/" component={Todo} />
                <Route path="/custom" component={CustomForm} />
                <Route path="/param" component={Param} />
                <Route path="/param/:id" component={Param} />
                <Route path="/material" component={Material} />
                <Route path="/editor" component={MaterialEditor} />
                <Route path="/tabledemo" component={MaterialTableDemo} />
                <Route path="/usestyles" component={UseStyles} />
                <Route path="/website" render={(props) => <Website {...props} isAuth={true} />} />
                <Route path="/login" component={Login} />
                <Route path="/redform" component={RedForm} />
                <Route path="/refform" component={RefForm} />
                <Route path="/test" component={Test} />
                <Route path="/rightmap" component={RightMap} />
                <Route path="/spinner" component={Spinner} />
                <Route path="/parentcomp" component={ParentComp} />
                <Route path="/elem" component={Elem} />
                <Route component={NotFound} /> */}
              </Switch>
              </SoAuthentication>
              </SoLayout>
            </SoTheme>
          </Router>
        </JssProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
