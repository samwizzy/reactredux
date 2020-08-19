import React, {Component} from 'react';
import {matchRoutes} from 'react-router-config';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppContext from '../../utils/AppContext';
import _ from 'lodash'

class SoAuthorization extends Component {

    constructor(props, context)
    {
        super(props);
        const {routes} = context;
        this.state = {
            accessGranted: true,
            routes
        };
        console.log(routes, "Routes Routes")
        console.log(context, "context context")
    }

    componentDidMount()
    {
        if ( !this.state.accessGranted )
        {
            this.redirectRoute(this.props);
        }
    }

    componentDidUpdate()
    {
        if ( !this.state.accessGranted )
        {
            this.redirectRoute(this.props);
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        const {location, user} = props;
        const {role} = user
        const {pathname} = location;

        // const matched = matchRoutes(state.routes, pathname)[0];

        // Url restrictions by role rights
        let matchUrl = false;
        // if(pathname.includes(matched.url)){
        //     matchUrl = true
        // } 

        const accessGranted = (pathname && role) ? matchUrl || role.name.toLowerCase() === 'guest' : true;

        return {
            accessGranted
        };
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        return nextState.accessGranted !== this.state.accessGranted;
    }

    redirectRoute(props)
    {
        const {location, user, history} = props;
        const {pathname, state} = location;
        /*
        User is guest
        Redirect to Login Page
        */
        if ( user.role.name === 'guest' )
        {
            history.push({
                pathname: '/login',
                state   : {redirectUrl: pathname}
            });
        }
        /*
        User is member
        User must be on unAuthorized page or just logged in
        Redirect to dashboard or redirectUrl
        */
        else
        {
            const redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/pages/errors/error-401';
            history.push({
                pathname: redirectUrl,
            });
        }
    }

    render()
    {
        const {children} = this.props;
        const {accessGranted} = this.state;
        // console.info('@Samwize Authorization rendered', accessGranted);
        return accessGranted ? <React.Fragment>{children}</React.Fragment> : null;
    }
}

function mapStateToProps({auth}){
    return {
        user: auth.user
    }
}

SoAuthorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(SoAuthorization));
