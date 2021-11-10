import {types} from '../redux/types'

export const loginAction = (token: any) => ({
  type: types.login,
  payload: {
    id: token,
  },
})
