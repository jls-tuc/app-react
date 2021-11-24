import {Civistypes} from './Civis-types'

const initialState = [{}]

export const TematicaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      console.log(action.payload.tematica)
      return {...state, tematicas: state.push(action.payload.tematica)}
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
