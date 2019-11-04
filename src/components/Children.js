import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import AppContext from './../services/context'

class Children extends React.Component {

    componentDidMount(){
        // console.log(this.props, "inside Children component")
    }


    render(){
        const { children } = this.props;
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}


export default withRouter(Children)