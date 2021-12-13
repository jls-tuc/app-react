import {useContext } from 'react'
import { dependenciaContext } from '../../contexts/DependenciaContext'

export const DependenciaGrid = () => {

    const { dependenciaState } = useContext(dependenciaContext);
    const { dependencias, getDependencias } = dependenciaState

    
    console.log(dependencias);
    
    
    return (
        <div>
            <h2 className="mb-5">Listado de dependencias</h2>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" style={{width:"25%"}} >Nombre</th>
                        <th scope="col" style={{width:"25%"}} >Organismo</th>
                        <th scope="col" style={{width:"40%"}} >Observaciones</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Datos</td>
                        <td>Datos</td>
                        <td>Datos</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
