import { LOG_IN_USER } from '../actions'

const initialState = {
    user: {
        username: null,
        password: null
    },
    error: {}
}

const loginReducer = function(state = initialState, action) {
    switch (action.type) {
        case LOG_IN_USER: 
            return {
                ...state
            }
        default:
            return state;
    }
};

export default loginReducer;