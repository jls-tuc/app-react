import {Civistypes} from './Civis-types'

export const TematicaReducer = (state = [], action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      return {
        ...state,
      }
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
