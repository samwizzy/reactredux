import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {renderRoutes} from 'react-router-config'

class Root extends Component {
    render(){
        const { route } = this.props

        return (
            <React.Fragment>
               {renderRoutes(route.routes)}
            </React.Fragment>
        );
    }
}

export default withRouter(Root)