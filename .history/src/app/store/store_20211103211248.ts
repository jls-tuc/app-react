import {combineReducers, createStore} from 'redux'
import {AuthReducer} from '../modules/auth/redux/AuthReducer'

const reducer = combineReducers({
  auth: AuthReducer,
})
export const store = createStore(reducer)
