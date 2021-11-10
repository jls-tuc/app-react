import {IMENU, IPERFIL} from '../models/DashModel'
import {types} from '../redux/types'

export const Dashaction = (menu: IMENU, nombre: string, perfil: IPERFIL, permisos: []) => ({
  type: types.Dashboard,
  payload: {
    menu,
    nombre,
    perfil,
    permisos,
  },
})
