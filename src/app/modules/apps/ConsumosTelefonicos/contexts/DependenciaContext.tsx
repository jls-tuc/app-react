import { createContext } from 'react'
import { DependenciaState } from '../interfaces/context.interfaces';

export type DependenciaContextProps = {
    dependenciaState: DependenciaState
}
export const dependenciaContext = createContext<DependenciaContextProps>({} as DependenciaContextProps);

