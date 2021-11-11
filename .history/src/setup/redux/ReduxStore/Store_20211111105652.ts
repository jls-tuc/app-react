import {applyMiddleware, createStore} from 'redux'
import {persistStore} from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducerCobine from '../Reducer/CombineReducers'

const store = createStore(reducerCobine, composeWithDevTools(applyMiddleware(thunk)))
const perStore = persistStore(store)

export {store, perStore}
