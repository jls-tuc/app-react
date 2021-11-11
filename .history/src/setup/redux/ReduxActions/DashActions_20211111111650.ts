import {IMENU, IPERFIL} from '../../../app/modules/auth/models/DashModel'
import {types} from '../types'

export const DashAction = (
  modulos: IMENU,
  nombre: string,
  perfil: IPERFIL,
  permisos: [],
  isLogged: boolean
) => ({
  type: types.Dashboard,
  payload: {
    modulos,
    nombre,
    perfil,
    permisos,
    isLogged,
  },
})

export const logoutAction = () => ({
  type: types.logoutDashboard,
})
