import {types} from './types'

export const AuthReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        token: action.payload.token,
      }
    case types.logout:
      return {}
    default:
      return state
  }
}
