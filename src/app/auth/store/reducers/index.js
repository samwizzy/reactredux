import { combineReducers } from 'redux'
import login from './login.reducer'
import signup from './signup.reducer'
import user from './user.reducer'
import snackbar from './snackbar.reducer'

export default combineReducers({
    login,
    signup,
    user,
    snackbar
});