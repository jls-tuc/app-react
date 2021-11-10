import {usrAction} from '../models/AuthModel'
import {types} from '../redux/types'

export const loginAction = (usuario: usrAction, token: any) => ({
  type: types.login,
  payload: {
    token,
    usuario,
  },
})
