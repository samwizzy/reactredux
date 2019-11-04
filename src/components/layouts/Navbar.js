import React from 'react'
import {List, ListItem, ListItemText, Typography} from '@material-ui/core'
import {Home, AccountBox} from '@material-ui/icons'

class Navbar extends React.Component{
    render(){
        return(
            <List component="nav">
                <ListItem>
                    <ListItemText inset>
                        <Typography color="inherit" variant="button">
                            Home
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="inherit" variant="button">
                            Posts
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="inherit" variant="button">
                            Repository
                        </Typography>
                    </ListItemText>
                    <ListItemText inset>
                        <Typography color="inherit" variant="button">
                            Todos
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        );
    }
} 

export default Navbar;

