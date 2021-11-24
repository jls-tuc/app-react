import {number} from 'yup'
import {string} from 'yup/lib/locale'
import {Civistypes} from './Civis-types'

const initialState = [
  {
    id: number,
    tenaticaName: string,
    tematicaColor: string,
    servActivos: string,
    buttonColor: string,
  },
]

export const TematicaReducer = (state = [], action: any) => {
  switch (action.type) {
    case Civistypes.SetTematica:
      return [...state, action.payload.tematica]
    case Civistypes.RemTematica:
      return {}
    default:
      return state
  }
}
