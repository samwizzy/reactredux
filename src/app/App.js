import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createGenerateClassName, jssPreset } from '@material-ui/styles'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import jssExtend from 'jss-extend'
import { SoTheme, SoLayout, SoAuthentication } from './@samwize'
import routes from './so-config/routesConfig'
import AppContext from './utils/AppContext'
import history from './utils/history'
import PrivateRoute from './utils/PrivateRoute'

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

class App extends React.Component {
  render() {

    return (
      <AppContext.Provider value={routes}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <Router history={history}>
            <SoTheme>
              <SoLayout>
                <SoAuthentication>
                  <Switch>
                    {renderRoutes(routes)}
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
