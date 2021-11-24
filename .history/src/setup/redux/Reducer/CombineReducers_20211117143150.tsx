import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import session from 'redux-persist/lib/storage/session'
import {TematicaReducer} from '../../../app/modules/apps/Civis/Redux/TematicaReducer'

///// importar los reducer que se utilizaran en todo el sistema
import {AuthReducer} from './AuthReducer'
import {DashReducer} from './DashReducer'

// configuramos el persistStorage

const persistConfig = {
  key: 'root',
  storage: session,
  whitelist: ['dashBoard', 'auth'],
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashBoard: DashReducer,
  tematicas: TematicaReducer,
})

export default persistReducer(persistConfig, rootReducer)

///https://levelup.gitconnected.com/persisting-your-react-application-state-with-redux-and-typescript-51e4e66c4e53
