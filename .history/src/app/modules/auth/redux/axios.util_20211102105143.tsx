/* eslint-disable dot-notation */
import axios, { AxiosInstance } from 'axios'
import { environment } from '../../../environments/environmen'

import { getLocalJwt } from '../auth/authServices/sessionStorage'

export function request (): AxiosInstance  {

	const headers: any = { 'Content-Type': 'application/json' }
	const localJwt = getLocalJwt()

	if (localJwt) {
		headers['Authorization'] = `Bearer ${localJwt}`
	}

	return axios.create({
		baseURL: environment.baseUrl,
		headers,
	})
}
