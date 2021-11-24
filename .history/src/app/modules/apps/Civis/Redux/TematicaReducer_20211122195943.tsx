import {Civistypes} from './Civis-types'

const initialState = [
  {
    id: Number,
    tenaticaName: String,
    tematicaColor: String,
    servActivos: String,
    buttonColor: String,
  },
]

export const TematicaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      console.log(action.payload.tematica)
      return [...state, state.push(action.payload)]
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
