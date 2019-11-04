import React, {Component, Fragment} from 'react'
import data from '../services/data'
import {cssBaseline, Container, Grid, Box, Button} from '@material-ui/core'
import Header from './layouts/Header'


const AppContext = React.createContext('light');

class Material extends Component {
    state = {
        users: data
    }

    render () {
        const { users } = this.state;
        return (
            <Fragment>
                <cssBaseline />
                <Header />
                <Container>
                    
                    <Box m={1} component="div" color="text.primary">
                        <Button variant="contained" color="primary">
                            Create
                        </Button>
                    </Box>
                    {users.map(user => <li key={user.id}>{user.username}</li>)}
                    
                </Container>
            </Fragment>
        )
    }
  
}

export default Material;