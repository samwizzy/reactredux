import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import * as middleware from './middlewares'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(middleware.logger, sagaMiddleware));

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

// action('HELLO_SAGA');

console.log(store.getState(), "GetState");

export default store;