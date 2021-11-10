import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL || 'api'

const URL = `${API_URL}/auth/organizaciones`

export const getOrg = async (usuario: string) => {
  return await axios.get(`${URL}/${usuario}`)
}
