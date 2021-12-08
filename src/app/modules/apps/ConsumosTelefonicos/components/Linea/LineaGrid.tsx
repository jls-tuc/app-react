import { useEffect, useState } from 'react';
import { Linea } from '../../interfaces/consumo.interfaces';
import { getAll } from '../../services/DatabaseConection';
import LineaItem from './LineaItem';

export default function LineaGrid() {
    const [lista, setLista] = useState<Linea[]>([]);
    useEffect(()=>{
        getAll('lineas')
            .then((res: any) => {
                console.log(res.data.items);
                setLista(res.data.items);
                
            })
            .catch((err: any) => console.log(err));
    },[])

    
    return (
        <div>
            <h2>Grilla de datos de lineas</h2>
            <hr />
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Número</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => <LineaItem datos={item} />)} 
                </tbody>
            </table>

        </div>
    )
}
