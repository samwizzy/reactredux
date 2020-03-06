import React from 'react'

class PureComp extends React.PureComponent {

    render() {
        console.log("Pure Component")
        return(
            <div>
                <p>Pure Component {this.props.name}</p>
            </div>
        )
    }
}

export default PureComp