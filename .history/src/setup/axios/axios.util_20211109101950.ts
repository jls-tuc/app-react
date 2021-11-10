import axios, {AxiosInstance} from 'axios'
import {useSelector} from 'react-redux'

const SERVER_API = process.env.REACT_APP_API_URL || 'api'

// eslint-disable-next-line react-hooks/rules-of-hooks
const localJwt = useSelector((state) => state)
console.log(localJwt)

export const request = (): AxiosInstance => {
  const headers: any = {'Content-Type': 'application/json'}

  if (localJwt) {
    headers['Authorization'] = `Bearer ${localJwt}`
  }

  return axios.create({
    baseURL: SERVER_API,
    headers,
  })
}
