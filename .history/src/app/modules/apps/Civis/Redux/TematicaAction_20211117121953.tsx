import {Civistypes} from './Civis-types'
import {Itematica} from './Interface/Tematica'

export const tematicaAction = (tematica: Itematica) => ({
  type: Civistypes.SetTematica,
  payload: {
    tematica,
  },
})

export const RemTematicaAction = () => ({
  type: Civistypes.RemTematica,
})
