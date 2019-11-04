import { combineReducers } from 'redux'
import logReducer from './../../components/redux/store/reducers'
import todoReducer from './../../components/todo/store/reducers'

const reducer = combineReducers({
    logReducer,
    todoReducer
});

export default reducer;