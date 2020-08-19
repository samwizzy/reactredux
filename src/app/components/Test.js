import React, { Component } from 'react'
import { Checkbox } from '@material-ui/core'

const AppContext = React.createContext('apple')

class Test extends Component {
    state = {
        isLogged: false,
        checkboxes: [
            {name:'mango', isSelected: false},
            {name:'apple', isSelected: false}
        ]
    }

    componentDidMount(){
        console.log("I just mounted and i am setting state...")
        this.setState({ isLogged : true })
    }

    static getDerivedStateFromProps(nextProps, nextState){
        return null
    }


    componentDidUpdate(prevProps, prevState){
        // console.log("I am updating after state has been changed...")
    } 

    onChange = (event, i) => {
        const copy = Object.assign({}, this.state)
        copy.checkboxes = copy.checkboxes.slice()
        copy.checkboxes[i] = Object.assign({}, copy.checkboxes[i])
        copy.checkboxes[i].isSelected = event.target.checked
        this.setState(copy)
    }

    render() {
        console.log(this.props, "Test Javacript")
        console.log(this.state, "State after Render")

        const {checkboxes} = this.state
        return (
            <AppContext.Provider value="dark">
                <div>
                    <h3>Component Lifecycle</h3>
                    {checkboxes.map((checkbox, i) => 
                        <Checkbox key={i} checked={checkbox.isSelected} onChange={(ev) => this.onChange(ev, i)} />
                    )}
                </div>
            </AppContext.Provider>
        )
    }
}

export default Test
