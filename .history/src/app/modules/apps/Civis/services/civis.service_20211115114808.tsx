import {request} from '../../../../../setup/axios/axios.util'
import {IConsulta} from '../interface/civis.interface'

const API_URL = process.env.REACT_APP_API_URL || 'api'
const URL = `${API_URL}/modules/web-services/violencias`

const consultaWs = (data: IConsulta) => {
  return request().post(URL, data)
}

export default consultaWs
