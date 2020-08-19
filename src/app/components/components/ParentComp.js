import React from 'react'
import PropTypes from 'prop-types'
import PureComp from './PureComp'
import RegComp from './RegComp'
import AppContext from './../../utils/AppContext'

class ParentComp extends React.Component {
    constructor(props, context){
        super(props)

        this.state = {
            name: 'Samuel'
        }
        console.log(context, "context")
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({ name: 'Samuel' })
        }, 2000)
    }

    render() {
        console.log("*************************Parent Component*************************")
        return(
            <div>
                <p>Parent Component</p>
                <PureComp name={this.state.name} />
                <RegComp name={this.state.name} />
            </div>
        )
    }
}

ParentComp.contextType = AppContext

export default ParentComp