/* eslint-disable dot-notation */
import axios, {AxiosInstance} from 'axios'
import {getUserByToken} from './AuthCRUD'

export function request(): AxiosInstance {
  const headers: any = {'Content-Type': 'application/json'}
  const localJwt = getUserByToken

  if (localJwt) {
    headers['Authorization'] = `Bearer ${localJwt}`
  }

  return axios.create({
    baseURL: '',
    headers,
  })
}
