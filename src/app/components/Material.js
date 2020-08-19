import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import data from '../services/data'
import { Container, Box, Button } from '@material-ui/core'

class Material extends Component {
    state = {
        users: data,
        records: []
    }

    handleChange = () => {
        this.setState((state) => ({
            records: [...state.records, {id: 1, name: 'sam'}] 
        }))
    }

    render () {
        const { users, records } = this.state;
        console.log(this.state, "All state")

        return (
            <Fragment>
                <Container>
                    
                    <Box m={1} component="div" color="text.primary">
                        <Button onClick={this.handleChange} variant="contained" color="primary">
                            Create
                        </Button>
                    </Box>
                    {users.map(user => <li key={user.id}>{user.username}</li>)}
                    <hr/>
                    {records && records.map(record => <li key={record.id}>{record.name}</li>)}
                    
                </Container>
            </Fragment>
        )
    }
  
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

function mapStateToProps(state) {
    return { 
        data: []
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Material);