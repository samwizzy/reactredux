import { combineReducers } from 'redux'
import log from './log.reducer'
import signup from './signup.reducer'

export default combineReducers({
    log,
    signup
})