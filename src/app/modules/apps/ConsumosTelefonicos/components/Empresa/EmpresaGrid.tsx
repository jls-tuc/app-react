import React, { useEffect, useState } from 'react'
import { Empresa } from '../../interfaces/consumo.interfaces'
import { getAll } from '../../services/DatabaseConection';
import EmpresaItem from './EmpresaItem'


export const EmpresaGrid = () => {

    const [empresas, setEmpresas] = useState<Empresa[]>([]);

    useEffect(() => {
        getAll('empresas')
            .then(res => {
                console.log(res.data.items);
                setEmpresas(res.data.items);

            })
            .catch(err => console.log(err)
            )

    }, [])

    return (
        <>
            <h1>Lista de Empresas</h1>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map(item => <EmpresaItem datos={item} />)}
                </tbody>
            </table>
        </>
    )
}
