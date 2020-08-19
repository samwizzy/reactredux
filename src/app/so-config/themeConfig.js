import { deepOrange, red, cyan } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const themesConfig = {
    default    : {
        palette: {
            type     : 'light',
            primary  : {
                main: deepOrange[800]
            },
            secondary: {
                light: cyan[400],
                main : cyan[700],
                dark : cyan[900]
            },
            error    : {
                main: red[800]
            }
        },
        status : {
            danger: red[500]
        }
    }
}

export default createMuiTheme(themesConfig.default)
