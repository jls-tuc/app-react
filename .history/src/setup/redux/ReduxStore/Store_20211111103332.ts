import {applyMiddleware, createStore} from 'redux'
import {persistStore} from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducerCobine from '../Reducer/CombineReducers'

export const store = createStore(reducerCobine, composeWithDevTools(applyMiddleware(thunk)))
export const perStore = persistStore(store)

export default {store, perStore}
