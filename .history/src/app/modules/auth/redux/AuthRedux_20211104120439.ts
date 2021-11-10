import {Action} from '@reduxjs/toolkit'

import {put, takeLatest} from 'redux-saga/effects'
import {UserModel} from '../models/UserModel'

import {types} from './types'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
}

export interface IAuthState {
  user?: UserModel
  accessToken?: string
}

export function* saga() {
  yield takeLatest(types.login, function* loginSaga() {
    yield put(actions.requestUser())
  })
}
