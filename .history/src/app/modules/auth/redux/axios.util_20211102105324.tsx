/* eslint-disable dot-notation */
import axios, {AxiosInstance} from 'axios'

export function request(): AxiosInstance {
  const headers: any = {'Content-Type': 'application/json'}
  const localJwt = getLocalJwt()

  if (localJwt) {
    headers['Authorization'] = `Bearer ${localJwt}`
  }

  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers,
  })
}
