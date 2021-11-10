import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL || 'api'

const URL = `${API_URL}/auth/organizaciones`

export const getOrg = (usuario: string) => {
  return axios.get(`${URL}/${usuario}`)
}
