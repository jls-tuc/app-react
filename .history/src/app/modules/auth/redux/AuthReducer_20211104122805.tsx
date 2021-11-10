import {types} from './types'

export const AuthReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.login:
      return {
        token: action.payload.token,
        foto: action.payload.foto,
        usuario: action.payload.token,
      }
    case types.logout:
      return {}
    default:
      return state
  }
}
