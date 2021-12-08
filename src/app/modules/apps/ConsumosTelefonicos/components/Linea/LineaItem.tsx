import { Linea } from '../../interfaces/consumo.interfaces'

type Props = {
    datos: Linea
}

export default function LineaItem({ datos }: Props) {
    return (
        <tr>
            <td>{datos.numero}</td>
            <td>{datos.estado}</td>
            <td>{datos.fecha_cambio_estado}</td>
        </tr>
    )
}
