export default function log(state = null, action){
    switch(action.type){
        case 'GET_LOG':
            return {
                ...action.payload
            }
        default:
            return state;
    }
}