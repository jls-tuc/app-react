import {IMENU, IPERFIL} from '../models/DashModel'
import {types} from '../redux/types'

export const DashAction = (modulos: IMENU, nombre: string, perfil: IPERFIL, permisos: []) => ({
  type: types.Dashboard,
  payload: {
    modulos,
    nombre,
    perfil,
    permisos,
  },
})
