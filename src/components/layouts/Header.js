import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Avatar, Button} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { makeStyles, withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Navbar from './Navbar'
import { red, amber, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: indigo
    },
    overrides: {
        MuiDrawer: {
            paper: {
                background: indigo,
                flexGrow: 1,
            }
        }
    }
});

class Header extends React.Component{
    render(){
        return(
            <MuiThemeProvider theme={theme}>
                <AppBar color="primary" position="static">
                    <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <Menu />
                    </IconButton>
                        <Typography>
                            <Avatar component="img" src=""/>
                        </Typography>
                        <Navbar />
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );
    }
} 

export default Header;

