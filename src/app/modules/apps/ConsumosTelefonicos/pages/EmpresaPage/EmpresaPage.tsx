import React from 'react'
import { EmpresaCreate } from '../../components/Empresa/EmpresaCreate';
import { EmpresaGrid } from '../../components/Empresa/EmpresaGrid'

const EmpresaPage = () => {
    return (
        <>
            <EmpresaCreate />
            <hr />
            <EmpresaGrid />
        </>
    )
};

export default EmpresaPage;