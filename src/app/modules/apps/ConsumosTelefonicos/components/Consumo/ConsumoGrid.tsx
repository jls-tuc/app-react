import React from 'react'
import ConsumoCreate from '../Consumo/ConsumoCreate'
import ConsumoItem from '../Consumo/ConsumoItem'

export default function ConsumoGrid() {
    return (
        <div>
            <h2>Lista de Consumos de una linea</h2>
            <hr />
            <ConsumoCreate />
            <hr />
            <ConsumoItem />
            <ConsumoItem />
            <ConsumoItem />
            <ConsumoItem />
            <ConsumoItem />
            <ConsumoItem /> 
        </div>
    )
}
