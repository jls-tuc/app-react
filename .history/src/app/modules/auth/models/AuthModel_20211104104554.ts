export interface usrAction {
  type: {
    payload: {
      token?: string
      foto?: string
      id?: string
      email?: string
      organizacion?: string
      usuario?: string
    }
  }
}

export interface LoginUs {
  usuario: string
  password: string
}
