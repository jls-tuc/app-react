import {request} from '../../../../../setup/axios/axios.util'

const API_URL = process.env.REACT_APP_API_URL || 'api'
const URL = `${API_URL}/modules/web-services/violencias`

const consultaWs = (dni: string) => {
  return request().post(URL, {dni})
}

export default consultaWs
