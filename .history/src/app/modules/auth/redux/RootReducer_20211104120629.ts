import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'
import * as auth from './AuthReducer'
import * as authSaga from './AuthRedux'

export const rootReducer = combineReducers({
  auth: auth.AuthReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([authSaga.saga()])
}
