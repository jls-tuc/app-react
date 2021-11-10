import {usrAction} from '../models/AuthModel'
import {types} from '../redux/types'

export const loginAction = (token: string, foto: string, usuario: usrAction) => ({
  type: types.login,
  payload: {
    token,
    foto,
    usuario,
  },
})
