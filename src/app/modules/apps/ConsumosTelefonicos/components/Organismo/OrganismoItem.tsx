import { useEffect, useState } from 'react'
import { Organismo } from '../../interfaces/consumo.interfaces'
import { destroy, update } from '../../services/DatabaseConection'

type Props = {
    datos: Organismo,
    onEdit: VoidFunction,
    onDelete: VoidFunction
}

export default function OrganismoItem({ datos, onDelete, onEdit }: Props) {

    const [organismo, setOrganismo] = useState<Organismo>(datos)
    const [organismoOriginal, setOrganismoOriginal] = useState<Organismo>(datos)
    
    const [editarOrganismo, setEditarOrganismo] = useState<boolean>(false);
    const [organismoClass, setOrganismoClass] = useState<string>('form-control form-control-sm')
    
    useEffect(() => {
        setOrganismoOriginal(organismo)
    },[])

    const onEditButtonHandler = () => {
        setEditarOrganismo(edit => !edit)
    }

    const onChangeNombreHandler = (evt: any) => {
        setOrganismoClass('form-control form-control-sm')
        setOrganismo(prevState => ({...prevState, nombre: evt.target.value}))  
    }

    const onChangeObservacionHandler = (evt: any) => {
        setOrganismo(prevState => ({...prevState, observaciones: evt.target.value}))  
    }

    const onDeleteButtonHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(`Seguro que desea eliminar el organismo "${datos.nombre}"?`)) {
            destroy('organismo', datos.id)
                .then(resp => {
                    // console.log('respuesta de borrado', resp);
                    resp.status === 200 ? onDelete() : console.log('Error al borrar el Organismo');
                })
                .catch(err => console.log(err))
        }
    }

    const onCancelButtonHandler = () => {
        setEditarOrganismo(false)
        setOrganismo(organismoOriginal);
    }

    const onConfirmEditButtonHandler = () => {
        if(organismo.nombre === ''){
            setOrganismoClass('form-control is-invalid')
        } else {
            update('organismo', organismo.id, organismo)
                .then(resp => {
                    setEditarOrganismo(false)
                    onEdit();
                    
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <tr >
            <td style={{verticalAlign:'middle'}}>{ editarOrganismo 
                    ? <input type="text" className={organismoClass} value={organismo.nombre} onChange={onChangeNombreHandler}/>
                    : <span style={{padding:"0 0.75rem"}}>{organismo.nombre}</span>
            }</td>
            <td style={{verticalAlign:'middle'}}>{ editarOrganismo
                ? <input type="text" className={organismoClass} value={organismo.observaciones} onChange={onChangeObservacionHandler} />
                : <span style={{padding:"0 0.75rem"}}>{organismo.observaciones}</span>
            }</td>
            <td style={{verticalAlign:'middle'}}>
                <div className={!editarOrganismo ? "d-flex justify-content-end" :"d-none justify-content-end"}>
                    <button className="btn btn-sm btn-warning" style={{ marginRight: "5px" }} onClick={onEditButtonHandler}><i className="far fa-edit text-black"></i></button>
                    <button className="btn btn-sm btn-danger" onClick={onDeleteButtonHandler}><i className="fa fa-trash"></i></button>
                </div>
                <div className={editarOrganismo ? "d-flex justify-content-end" :"d-none justify-content-end"}>
                    <button className="btn btn-sm btn-primary" style={{ marginRight: "5px" }} onClick={onConfirmEditButtonHandler}><i className="fa fa-check text-black"></i></button>
                    <button className="btn btn-sm btn-secondary" onClick={onCancelButtonHandler}><i className="fa fa-ban"></i></button>
                </div>
            </td>
        </tr>
    )
}
