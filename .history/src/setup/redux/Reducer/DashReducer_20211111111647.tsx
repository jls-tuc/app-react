import {types} from '../types'

export const DashReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.Dashboard:
      return {
        modulos: action.payload.modulos,
        nombre: action.payload.nombre,
        perfil: action.payload.perfil,
        permisos: action.payload.permisos,
        isLogged: action.payload.isLogged,
      }
    case types.logoutDashboard:
      return {}
    default:
      return state
  }
}
