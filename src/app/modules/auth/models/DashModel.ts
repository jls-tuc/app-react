export interface IMENU {
  descripcion?: string
  id?: string
  menu: [
    {
      children?: []
      expandable?: boolean
      icon?: string
      id?: string
      level?: string
      name?: string
      state?: string
      tooltip?: string
      type?: string
    }
  ]
  nombre?: string
  paginaInicio: string
  _id?: string
}

export interface IPERFIL {
  nombre?: string
}
