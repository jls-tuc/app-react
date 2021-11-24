import {Civistypes} from './Civis-types'
interface tematica {
  tematicas: []
}

export const TematicaReducer = (state: tematica = {tematicas: []}, action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      return {...state, tematicas: state.tematicas.push(action?.payload?.tematica)}
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
