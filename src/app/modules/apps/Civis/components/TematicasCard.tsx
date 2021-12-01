import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ISTATE} from '../../../../../setup/redux/interface/reduxState.interface'

import {tematicaAction} from '../Redux/TematicaAction'

type Props = {
  className: string
}
interface tamaticaState {
  id: string
  tipo_detalle: string
  detalle_modulo: string
  acceso_nombre: string
  detalle_html: {
    buttonColor: string
    accesoColor: string
  }
  web_service: [
    {
      organismo_nombre: string
      nombre_ws: string
      activo: boolean
      fecha_alta: string
      fecha_baja: string
    }
  ]
}

const TematicasCard: React.FC<Props> = ({className}) => {
  const dispatch = useDispatch()
  const [tematicaPerfil, setTematicaPerfil] = useState([])
  const dashState: any = useSelector((state: ISTATE) => state.dashBoard)
  const cargarPerfil = () => {
    let {modulos} = dashState
    let modulo = modulos.filter((ele: any) => ele.nombre === 'civis')
    setTematicaPerfil(modulo[0].WSmodulo)
  }
  useEffect(() => {
    cargarPerfil()
    return () => {}
  }, [])

  const handleChange = (tematica: tamaticaState) => {
    dispatch(tematicaAction(tematica))
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>Tematicas</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}

      <div className='card-body pt-2'>
        {/* begin::Item */}
        {tematicaPerfil.map((item: tamaticaState) => (
          <div className='d-flex align-items-center mb-8' key={item.id}>
            {/* begin::Bullet */}
            <span
              className={`bullet bullet-vertical h-40px ${item.detalle_html.accesoColor}`}
            ></span>
            {/* end::Bullet */}
            {/* begin::Checkbox */}
            <div className='form-check form-check-custom form-check-solid mx-5'>
              <input
                className='form-check-input'
                type='checkbox'
                name='tematica'
                value={item.acceso_nombre}
                onChange={() => handleChange(item)}
              />
            </div>
            {/* end::Checkbox */}
            {/* begin::Description */}
            <div className='flex-grow-1'>
              <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
                {item.acceso_nombre}
              </a>
              <span className='text-muted fw-bold d-block'>{`Servicios Activos ${item.web_service.length}`}</span>
            </div>
            {/* end::Description */}

            <span className={`badge ${item.detalle_html.buttonColor} fs-8 fw-bolder`}>Info</span>
          </div>
        ))}

        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TematicasCard}
