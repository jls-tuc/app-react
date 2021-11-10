export interface usrAction {
  account_id?: string
  email?: string
  exp?: number
  iat?: number
  id?: string
  nombreCompleto?: string
  organizacion?: string
  type?: string
  usuario: string
}

export interface LoginUs {
  usuario: string
  password: string
}
