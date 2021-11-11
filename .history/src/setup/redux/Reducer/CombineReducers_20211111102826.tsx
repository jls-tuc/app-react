import {combineReducers} from 'redux'
import {AuthReducer} from './AuthReducer'
import {DashReducer} from './DashReducer'

const reducerCobine = combineReducers({
  auth: AuthReducer,
  dashBoard: DashReducer,
})

export default reducerCobine
