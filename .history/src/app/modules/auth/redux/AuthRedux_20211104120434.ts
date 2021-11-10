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

export const actions = {
  login: (accessToken: string) => ({type: actionTypes.Login, payload: {accessToken}}),
  register: (accessToken: string) => ({
    type: actionTypes.Register,
    payload: {accessToken},
  }),
  logout: () => ({type: actionTypes.Logout}),
  requestUser: () => ({
    type: actionTypes.UserRequested,
  }),
  fulfillUser: (user: UserModel) => ({type: actionTypes.UserLoaded, payload: {user}}),
  setUser: (user: UserModel) => ({type: actionTypes.SetUser, payload: {user}}),
}

export function* saga() {
  yield takeLatest(types.login, function* loginSaga() {
    yield put(actions.requestUser())
  })
}
