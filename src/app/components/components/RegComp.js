import React from 'react'

class RegComp extends React.Component {

    render() {
        console.log("Regular Component")
        return(
            <div>
                <p>Regular Component {this.props.name}</p>
            </div>
        )
    }
}

export default RegComp