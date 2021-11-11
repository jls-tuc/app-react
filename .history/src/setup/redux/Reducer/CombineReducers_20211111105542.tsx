import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

///// importar los reducer que se utilizaran en todo el sistema
import {AuthReducer} from './AuthReducer'
import {DashReducer} from './DashReducer'

// configuramos el persistStorage

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['dashBoard', 'auth'],
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashBoard: DashReducer,
})

export default persistReducer(persistConfig, rootReducer)

///https://levelup.gitconnected.com/persisting-your-react-application-state-with-redux-and-typescript-51e4e66c4e53
