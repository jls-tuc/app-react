import { OrganismoItem } from "..";
import { Organismo } from "../../interfaces/consumo.interfaces";

type Props = {
    organismos: Organismo[],
    onEdit: VoidFunction,
    onDelete: VoidFunction,
}
const OrganismoGrid = ({organismos, onDelete, onEdit}: Props) => {
       
    const onEditHandler = () => {
        onEdit();
    }
    
    const onDeleteHandler = () => {
        onDelete();
    }
    return (
        <div>
            <h2 className="mb-5">Listado de organismos</h2>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" style={{width:"40%"}} >Nombre</th>
                        <th scope="col" style={{width:"50%"}} >Observaciones</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {organismos.map(item => <OrganismoItem datos={item} key={item.id} onEdit={onEditHandler} onDelete={onDeleteHandler} />)} 
                </tbody>
            </table>

        </div>
    )
}

export default OrganismoGrid;
