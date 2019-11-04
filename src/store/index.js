import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import * as middleware from './middlewares'

const store = createStore(reducer, applyMiddleware(middleware.logger));

// console.log(store.getState(), "GetState");

// store.dispatch({
//     type: 'ADD_COUNTER',
//     payload: 1
// });

export default store;