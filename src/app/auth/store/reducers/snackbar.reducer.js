import { OPEN_MESSAGE_ALERT, CLOSE_MESSAGE_ALERT } from '../actions'

const initialState = {
    data: {
        message: "",
        open: false
    }
}

const snackbarReducer = function(state = initialState, action) {
    switch (action.type) {
        case OPEN_MESSAGE_ALERT: 
            return {
                ...state,
                data: {...action.payload, open: true}
            }
        case CLOSE_MESSAGE_ALERT: 
            return {
                ...state,
                // data: {message: "", open: false}
            }
        default:
            return state;
    }
};

export default snackbarReducer;