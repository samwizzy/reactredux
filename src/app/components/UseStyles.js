import React from 'react'
import { Container, CssBaseline, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.white,
    color: '#ACF8EB',
    marginTop: '30px'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 10%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '20px'
  }
}));

function UseStyles (props){
    const classes = useStyles();
    const [bsmBranch, setBsmBranch] = React.useState({});

    React.useEffect(() => {
        setBsmBranch({name: 'samuel'})
        console.log(props, "Props")
    }, [])

    const handleRoute = () => {
      props.history.push('/')
    }

    return(
      <React.Fragment>
        <CssBaseline/>
        <Container className={classes.root}>
            <Typography variant="h5" color="textSecondary">
            Private Login
            </Typography>

            <Button className={classes.button} onClick={handleRoute}>
                Getting Started
            </Button>
        
        </Container>
      </React.Fragment>
    );
}

export default UseStyles;
