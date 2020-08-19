import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'

const Footer = () => {
    return (
        <Fragment>
            <footer class='w-full text-center border-t border-grey p-4 mt-4 pin-b'>
                <Typography variant="overline">@Samwize Boilerplate — React + Redux + Saga</Typography>
            </footer>
        </Fragment>
    )
}

export default Footer