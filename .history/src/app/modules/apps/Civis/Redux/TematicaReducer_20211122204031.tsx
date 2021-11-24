import {Civistypes} from './Civis-types'
interface tematica {
  tematicas: []
}

export const TematicaReducer = (state: tematica, action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      console.log(action.payload.tematica)
      return {...state, tematicas: action.payload.tematica}
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
