import {Civistypes} from './Civis-types'
const tematica = {
  tematicas: [],
}

export const TematicaReducer = (state = tematica, action: any) => {
  console.log(action.payload?.tematica)
  let item1 = state.tematicas.find((item: any) => {
    item.id = action.payload.tematica.id
  })
  console.log(item1)

  switch (action.type) {
    case Civistypes.SetTematica:
      return {...state, tematicas: [...state.tematicas, action.payload.tematica]}
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
