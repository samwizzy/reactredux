import React, { Fragment } from 'react'
import { cssBaseline } from '@material-ui/core'

function Layout(props){
    const { header, sidebar, footer } = props
    return(
        <Fragment>
            {/* <cssBaseline /> */}
            <header>
                {header}
            </header>
            <main>
                {sidebar}
            </main>
            <footer>
                {footer}
            </footer>
        </Fragment>
    );
}

export default Layout;


