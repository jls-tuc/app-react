import { useState } from 'react'
import { create } from '../../services/DatabaseConection';

type Props = {
    onCancel: VoidFunction;
    onCreate: VoidFunction;
}

export default function OrganismoCreate({onCancel, onCreate}: Props) {
    
    const [nombre, setNombre] = useState<string>('');
    const [observaciones, setObservaciones] = useState<string>('');
    const [inputClass, setInputClass] = useState<string>('form-control')


    const nombreHandler = (evt:any): void => {
        setNombre(evt.target.value)
        setInputClass('form-control');
    }
    const observacionesHandler = (evt:any): void => {
        setObservaciones(evt.target.value)
    }
    const submitDatosHandler = (): void => {
        if(nombre === '' ){
            setInputClass('form-control is-invalid');
        } else {
            setInputClass('form-control');
            let datos = { nombre, observaciones }
            create('organismo', datos)
                .then(resp => {
                    console.log(resp);
                    onCreate();
                    clearDatos();
                });
        }
    }

    const cancelHandler = (): void => {
        clearDatos();
        
    }

    const clearDatos = (): void => {
        setNombre('');
        setObservaciones('');
        setInputClass('form-control')
        onCancel();
    }


    return (
        <div className="row g-2">
            <div className="col-md">
                <div className="form-floating">
                    <input 
                        type="text"
                        className={inputClass}
                        value={nombre}
                        onChange={nombreHandler}
                    />
                    <label>Nombre</label>
                </div>
            </div>
            <div className="form-floating">
                <textarea 
                    className="form-control" 
                    value={observaciones} 
                    onChange={ observacionesHandler } 
                    style={{ height: "100px" }}
                ></textarea>
                <label >Observaciones</label>
            </div>
            <div className="d-flex justify-content-end">
                <button onClick={submitDatosHandler} className="btn btn-primary ">Aceptar</button>
                <button onClick={cancelHandler} className="btn btn-secondary" style={{marginLeft:"10px"}}>Cancelar</button>
            </div>
        </div>

    )
}
