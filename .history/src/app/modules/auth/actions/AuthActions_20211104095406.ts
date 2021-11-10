import {types} from '../redux/types'

export const loginAction = (token: any) => ({
    type: types.login,
    payload: {
      token,
    },
  })
  
export const loginRedux = (usuario:string , password:string) => {
   return(dispatch) =>{
       setTimeout((=>{
           dispatch (loginAction(token))
       },1000))
   }
}

