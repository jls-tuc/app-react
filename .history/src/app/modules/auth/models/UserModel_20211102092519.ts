import {AuthModel} from './AuthModel'

export interface UserModel {
  id: number
  username: string
  password: string | undefined
  email: string
  nombre: string
  apellido: string
  fullname?: string
  organizacion?: string
  roles?: Array<number>
  auth?: AuthModel
}
