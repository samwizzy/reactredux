import React from 'react'
import Layout from './layouts'
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'

class Website extends React.Component {
    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <Layout 
                    header={<Header />}
                />
            </React.Fragment>
        )
    }
}

export default Website;