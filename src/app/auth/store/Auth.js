import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'

class Auth extends Component {
    constructor(props){
        super(props)
        this.AutoLogin()
    }

    AutoLogin = () => {

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Auth)

