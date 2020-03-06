import axios from 'axios'

export const GET_USER_PROFILE = '@USER-PROFILE/GET USER PROFILE'
export const GET_USER_PROFILE_ERROR = '@USER-PROFILE/GET USER PROFILE ERROR'

export function getUserProfile(user) {
        return ({
            type: GET_USER_PROFILE,
            payload: user
        })
}