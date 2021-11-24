import {Civistypes} from './Civis-types'
const tematica = {
  tematicas: [],
}

export const TematicaReducer = (state = tematica, action: any) => {
  let item1 = state.tematicas.find(
    (item: any) =>
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      item?.id === action.payload?.tematica?.id
  )
  if (!item1) {
    return {...state, tematicas: [...state.tematicas, action.payload?.tematica]}
  }
  if (item1) {
    return {
      ...state,
      tematicas: [
        ...state.tematicas,
        state.tematicas.filter((item: any) => item?.id !== action.payload?.tematica?.id),
      ],
    }
  } else {
    return state
  }
}
