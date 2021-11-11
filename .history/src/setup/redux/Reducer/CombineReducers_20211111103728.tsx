import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import store from 'redux-persist/lib/storage'

///// importar los reducer que se utilizaran en todo el sistema
import {AuthReducer} from './AuthReducer'
import {DashReducer} from './DashReducer'

const reducerCobine = combineReducers({
  auth: AuthReducer,
  dashBoard: DashReducer,
})

export default reducerCobine
