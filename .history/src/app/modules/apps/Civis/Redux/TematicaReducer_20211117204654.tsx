import {Civistypes} from './Civis-types'

export const TematicaReducer = (state = [], action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      return {
        tematica: action.payload.tematica,
      }
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
