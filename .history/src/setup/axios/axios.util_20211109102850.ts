import axios, {AxiosInstance} from 'axios'

const SERVER_API = process.env.REACT_APP_API_URL || 'api'

export const request = (): AxiosInstance => {
  const localJwt = sessionStorage.getItem('token')
  console.log(localJwt)

  const headers: any = {'Content-Type': 'application/json'}

  if (localJwt) {
    headers['Authorization'] = `Bearer ${localJwt}`
  }

  return axios.create({
    baseURL: SERVER_API,
    headers,
  })
}
