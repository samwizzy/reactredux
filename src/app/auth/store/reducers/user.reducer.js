import { GET_USER_PROFILE } from '../actions'

const initialState = {
    user: {
        username: null,
        password: null,
        role: {}
    },
    error: {}
}

const userReducer = function(state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE: 
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;