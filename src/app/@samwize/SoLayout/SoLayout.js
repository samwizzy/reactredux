import React, {Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import Layouts from './../../components/layouts'

class SoLayout extends React.Component {
    render() {
        const {children} = this.props
        const Layout = Layouts.layout1 

        return (
            <Layout>
                {children}
            </Layout>
        )
    }
}

export default withRouter(SoLayout)