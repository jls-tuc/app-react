import {applyMiddleware, combineReducers, createStore} from 'redux'
import {AuthReducer} from '../modules/auth/redux/AuthReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {DashReducer} from '../modules/auth/redux/DashReducer'

const reducer = combineReducers({
  auth: AuthReducer,
  dash: DashReducer,
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
