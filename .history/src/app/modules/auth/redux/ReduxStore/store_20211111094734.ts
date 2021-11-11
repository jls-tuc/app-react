import {applyMiddleware, combineReducers, createStore} from 'redux'
import {AuthReducer} from '../AuthReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {DashReducer} from '../DashReducer'

const reducer = combineReducers({
  auth: AuthReducer,
  dashBoard: DashReducer,
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
