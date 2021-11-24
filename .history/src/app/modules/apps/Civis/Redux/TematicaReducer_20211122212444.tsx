import {Civistypes} from './Civis-types'
interface tematica {
  tematicas: []
}

const addTematica = (state: tematica[], tematica: any) => [...state, {}]

export const TematicaReducer = (state = {}, action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      return {...state, tematicas: addTematica(action.payload.tematica)}
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
