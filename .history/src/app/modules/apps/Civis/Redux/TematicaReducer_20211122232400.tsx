import {Civistypes} from './Civis-types'
const tematica = {
  tematicas: [],
}

export const TematicaReducer = (state = tematica, action: any) => {
  let item1 = state.tematicas.find(
    (item: any) =>
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      item.id === action.payload?.tematica?.id
  )

  switch (action.type) {
    case Civistypes.SetTematica:
      return {...state, tematicas: [...state.tematicas, action.payload.tematica]}
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
