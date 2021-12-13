import { Dependencia } from "../interfaces/consumo.interfaces";
import { DependenciaState } from "../interfaces/context.interfaces";

type DependenciaAction = 
    | { type:'getTodos', payload: Dependencia[] }
    | { type:'update', payload: Dependencia } 
    | { type: 'destroy', payload: {id: string }}


export const dependenciaReducer = ( state: DependenciaState, action: DependenciaAction): DependenciaState => {

    switch (action.type) {
        case 'getTodos':
            return {
                ...state,
                dependencias: action.payload
            };

        default:
            return state;
    }
}