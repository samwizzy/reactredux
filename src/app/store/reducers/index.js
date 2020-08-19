import { combineReducers } from 'redux'
import logReducer from './../../components/redux/store/reducers'
import todoReducer from './../../components/todo/store/reducers'
import auth from './../../auth/store/reducers'

const reducer = combineReducers({
    auth,
    logReducer,
    todoReducer
});

export default reducer;