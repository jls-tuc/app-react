import {usrAction} from '../models/AuthModel'
import {types} from '../redux/types'

export const loginAction = (usuario: usrAction, token: string) => ({
  type: types.login,
  payload: {
    token,
    usuario,
  },
})
