import axios, {AxiosInstance} from 'axios'

const SERVER_API = process.env.REACT_APP_API_URL || 'api'

export const request = (): AxiosInstance => {
  const localJwt = sessionStorage.getItem('token')

  const headers: any = {'Content-Type': 'application/json'}

  if (localJwt) {
    headers['Authorization'] = `jwt ${localJwt}`
  }

  return axios.create({
    baseURL: SERVER_API,
    headers,
  })
}
