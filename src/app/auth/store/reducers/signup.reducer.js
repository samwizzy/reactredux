import { SIGN_UP_USER } from '../actions'

const initialState = {
    user: {
        username: "",
        password: "",
        email: "",
    },
    error: {}
}

const signupReducer = function(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP_USER: 
            return {
                ...state
            }
        default:
            return state;
    }
};

export default signupReducer;