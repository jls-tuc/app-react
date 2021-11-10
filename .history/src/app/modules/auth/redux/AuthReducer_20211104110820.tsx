import {types} from './types'

export const AuthReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.login:
      return {
        token: action.payload.token,
        usuario: action.payload.token,
      }
    case types.logout:
      return {}
    default:
      return state
  }
}
