import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'
import * as auth from './AuthReducer'

export const rootReducer = combineReducers({
  auth: auth.AuthReducer,
})

export type RootState = ReturnType<typeof rootReducer>
