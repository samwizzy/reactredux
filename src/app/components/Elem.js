import React, { Component } from 'react'
import { Box, Button, Link, Typography } from '@material-ui/core'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers';

class Elem extends React.Component {
    state = {
        loading: true,
        date: new Date(),
        selectedDate: new Date('2014-08-18T21:11:54')
    }

    handleDateChange = date => {
        this.setState({selectedDate: date});
    };
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick = () => {
        this.setState({loading: false})
    }

    render(){
        const { loading, date, selectedDate } = this.state
        const preventDefault = event => event.preventDefault();

        return (
            <React.Fragment>
                { loading && 
                    <Box m={2}>This is loading...</Box>
                }
                <Typography variant="h6">This time is {date.toLocaleTimeString()}</Typography><br/>
                <Link variant="body2" href="/website">
                    Link
                </Link><br/>
                <Button type="button" color="primary" variant="contained" onClick={this.handleClick}>
                    Press
                </Button>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </React.Fragment>
        )
    }
}

export default Elem