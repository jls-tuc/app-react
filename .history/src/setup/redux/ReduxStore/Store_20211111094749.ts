import {applyMiddleware, combineReducers, createStore} from 'redux'
import {AuthReducer} from '../Reducer/AuthReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {DashReducer} from '../Reducer/DashReducer'

const reducer = combineReducers({
  auth: AuthReducer,
  dashBoard: DashReducer,
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
