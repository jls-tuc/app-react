import { useEffect, useState } from "react";
import { OrganismoCreate, OrganismoGrid } from "../../components";
import { Organismo } from "../../interfaces/consumo.interfaces";
import { getAll } from "../../services/DatabaseConection";

const OrganismoPage = () => {

    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [organismos, setOrganismos] = useState<Organismo[]>([]);

    useEffect(()=>{
        updateDatos();
    },[])

    const updateDatos = () => {
        getAll('organismos')
        .then((res: any) => {
            console.log(res.data.items);
            setOrganismos(res.data.items);
            
        })
        .catch((err: any) => console.log(err));
    }

    const cancelHandler = () => {
        console.log('entra');
        setShowCreate(false)
    }
    const showCreatePanel = () => {
        setShowCreate(show => !show)
    }

    return (
        <div>
            <p>
                <button className="btn btn-primary" type="button" onClick={showCreatePanel} >
                    Nuevo Organismo
                </button>
            </p>

            <div className={!showCreate ? "collapse": '' } id="collapseExample">
                <div className="card card-body">
                    <OrganismoCreate onCancel={ cancelHandler} onCreate = {updateDatos}/>    
                </div>
            </div>
            
            <hr />
            <OrganismoGrid organismos={organismos}  onEdit={updateDatos} onDelete={updateDatos} />
        </div>
    )
}

export default OrganismoPage;
