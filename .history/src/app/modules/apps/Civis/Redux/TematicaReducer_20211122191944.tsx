import {number} from 'yup'
import {string} from 'yup/lib/locale'
import {Civistypes} from './Civis-types'

const initialState = [
  {
    id: number,
    tenaticaName: String,
    tematicaColor: String,
    servActivos: String,
    buttonColor: String,
  },
]

export const TematicaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      return [...state, state.push(action.payload.tematica)]
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
