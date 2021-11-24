import {Civistypes} from './Civis-types'
const tematica = {
  tematicas: [],
}

export const TematicaReducer = (state = tematica, action: any) => {
  let item = state.tematicas.find((item: any) => {
    item.id = action.payload.tematica.id
  })

  switch (action.type) {
    case Civistypes.SetTematica:
      return {...state, tematicas: [...state.tematicas, action.payload.tematica]}
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
