import { useReducer } from 'react'
import { DependenciaState } from '../interfaces/context.interfaces'
import { getAll } from '../services/DatabaseConection'
import { dependenciaContext } from './DependenciaContext'
import { dependenciaReducer } from './DependenciaReducer'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const getDependencias = async () => {
    const resp = await getAll('dependencias');
    return resp.data.items;
    
}

const initialState: DependenciaState = {
    dependencias: [],
    getDependencias
}


export const DependenciaProvider = ({children}: Props) => {
    const [dependenciaState, dispatch] = useReducer(dependenciaReducer, initialState)
    return (
        <dependenciaContext.Provider value={{dependenciaState}}>
            {children}
        </dependenciaContext.Provider>
    )
}
