import axios from 'axios'

export const SIGN_UP_USER = '@SIGNUP/SIGN UP USER'
export const SIGN_UP_USER_ERROR = '@SIGNUP/SIGN UP USER'

export function signUp(user) {
    return (dispatch) => dispatch({
        type: SIGN_UP_USER,
        payload: user
    })
}