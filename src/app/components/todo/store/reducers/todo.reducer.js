const initialState = {
    user: {
        username: null,
        password: null
    },
    count: 0
}

const todoReducer = function(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN': 
            console.log('I am the login reducer');
            return {
                ...state
            }
        case 'ADD_TODO': 
            console.log('I am the todo reducer');
            const arr = Object.assign({}, state, action.payload);
            return {
                ...state,
                ...action.payload,
            }    
        case 'GET_USERS':
            return { 
                ...state,
                ...action.payload
            };
        case 'ADD_COUNTER':
            const count = state.count + action.payload;
            console.log('I am the counter reducer: ' + count);
            return { 
                ...state, 
                count 
            };    
        default:
            return state;
    }
};

export default todoReducer;