import axios from 'axios'

export function SignUp(user) {
    return (dispatch) => dispatch({
        type: 'ADD_USER',
        payload: user
    })
}

export function LoginUser(user) {
    return {
        type: 'LOGIN',
        payload: {
            username: user.username,
            password: user.password
        }
    }
}

export function addCounter(){
    return {
        type: 'ADD_COUNTER',
        payload: 1
    }
}

export function getUsers() {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    // .then(response => {
        // console.log(response.data)
        return ({
            type: 'GET_USERS',
            payload: { user: {username: 'sam', password: 'password'} }
        })
    // })
}

let nextTodoId = 0;
export const addTodo = content => ({
    type: 'ADD_TODO',
    payload: {
        id: ++nextTodoId,
        content
    }
});