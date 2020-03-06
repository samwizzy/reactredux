import axios from 'axios'

export const LOG_IN_USER = '@LOGIN/SIGN UP USER'
export const LOG_IN_USER_ERROR = '@LOGIN/SIGN UP USER ERROR'

export function loginUser(user) {
    return {
        type: LOG_IN_USER,
        payload: user
    }
}