import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './../shared-components/Header'
import Navbar from './../shared-components/Navbar'
import Sidebar from './../shared-components/Sidebar'
import Footer from './../shared-components/Footer'

const useStyles = makeStyles(theme => ({
    root: {
        
    }
}))

function Layout1(props){
    const { classes } = useStyles()

    return(
        <Fragment>
            <header>
                <Header/>
            </header>
            <div>
                <Sidebar/>
            </div>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Fragment>
    );
}

export default Layout1;


