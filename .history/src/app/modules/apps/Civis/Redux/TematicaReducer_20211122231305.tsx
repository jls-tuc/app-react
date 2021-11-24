import {Civistypes} from './Civis-types'
const tematica = {
  tematicas: [],
}

export const TematicaReducer = (state = tematica, action: any) => {
  console.log(state.tematicas)
  let item = state.tematicas.find((item: any) => {
    item.id = action.payload.tematica.id
  })
  console.log(item)

  switch (action.type) {
    case Civistypes.SetTematica:
      return {...state, tematicas: [...state.tematicas, action.payload.tematica]}
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
