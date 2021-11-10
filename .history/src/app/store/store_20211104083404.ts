import {combineReducers, createStore} from 'redux'
import {AuthReducer} from '../modules/auth/redux/AuthReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const reducer = combineReducers({
  auth: AuthReducer,
})
export const store = createStore(reducer, composeWithDevTools())
