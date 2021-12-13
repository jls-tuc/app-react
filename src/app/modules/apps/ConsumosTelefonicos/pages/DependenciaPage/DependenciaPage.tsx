import React, { useState } from 'react'
import { DependenciaGrid } from '../../components/Dependencia/DependenciaGrid'
import { DependenciaProvider } from '../../contexts/DependenciaProvider'

const DependenciaPage = () => {
    const [showCreate, setShowCreate] = useState<boolean>(false)

    const onShowCreateHandler = () => {
        setShowCreate(show => !show)
    }
    return (
        <DependenciaProvider>
            <p>
                <button className="btn btn-primary" type="button" onClick={onShowCreateHandler} >
                    Nueva Dependencia
                </button>
            </p>

            <div className={!showCreate ? "collapse": '' } id="collapseExample">
                <div className="card card-body">
                    Crear Dependencia    
                </div>
            </div>
            
            <hr />
            <DependenciaGrid />
        </DependenciaProvider>
    )
}

export default DependenciaPage;