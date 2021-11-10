import {types} from './types'

export const DashReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.Dashboard:
      return {
        menu: action.payload.modulos,
        nombre: action.payload.nombre,
        perfil: action.payload.perfil,
        permisos: action.payload.permisos,
      }

    default:
      return state
  }
}
