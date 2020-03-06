import * as Actions from '../actions'

const initialState = {
    data: {}
}

export default function signupReducer(state = initialState, action){
    switch(action.type){
        case Actions.SAVE_USER:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}