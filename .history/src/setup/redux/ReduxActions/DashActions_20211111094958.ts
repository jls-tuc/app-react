import {IMENU, IPERFIL} from '../../models/DashModel'
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
