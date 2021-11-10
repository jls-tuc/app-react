import {types} from './types'

export const AuthReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.login:
      return {
        token: action.payload.token,
        foto: action.payload.foto,
        id: action.payload.id,
        email: action.payload.email,
        organizacion: action.payload.organizacion,
        usuario: action.payload.usuario,
      }
    case types.logout:
      return {}
    default:
      return state
  }
}
