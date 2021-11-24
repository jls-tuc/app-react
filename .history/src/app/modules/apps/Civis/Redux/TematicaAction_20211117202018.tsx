import {Civistypes} from './Civis-types'
const tenamticasName = {}

export const tematicaAction = (tematica: {}) => ({
  type: Civistypes.SetTematica,
  payload: {
    tematica,
  },
})

export const RemTematicaAction = () => ({
  type: Civistypes.RemTematica,
})
