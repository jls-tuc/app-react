import axios from 'axios'
import {request} from '../../setup/axios/axios.util'

const API_URL = process.env.REACT_APP_API_URL || 'api'

const URL = `${API_URL}/auth/organizaciones`

export const getOrg = async () => {
  return await request()
    .get(URL)
    .then((resp) => {
      console.log(resp.data)
    })
}
