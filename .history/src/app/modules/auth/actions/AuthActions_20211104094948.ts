import {types} from '../redux/types'

export const loginAction = () => {}

const loginAction = (token: any) => ({
  type: types.login,
  payload: {
    token,
  },
})
