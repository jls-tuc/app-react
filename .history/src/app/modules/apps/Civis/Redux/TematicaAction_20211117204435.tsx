import {Civistypes} from './Civis-types'

export const tematicaAction = (tematica: any) => ({
  type: Civistypes.SetTematica,
  payload: {
    tematica,
  },
})

export const RemTematicaAction = () => ({
  type: Civistypes.RemTematica,
})
