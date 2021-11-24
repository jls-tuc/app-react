import {Civistypes} from './Civis-types'

const initialState = [{tematicaName: ''}]

export const TematicaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      return {
        ...state,
        tematica: action.payload.tematica,
      }
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
