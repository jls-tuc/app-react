import {usrAction} from '../../../app/modules/auth/models/AuthModel'
import {types} from '../types'

export const loginAction = (token: string, foto: string, usuario: usrAction) => ({
  type: types.login,
  payload: {
    token,
    foto,
    usuario,
  },
})

export const logoutAction = () => ({
  type: types.logout,
})
