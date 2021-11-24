import React, {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import {number, string} from 'yup'
import {tematicaAction} from '../Redux/TematicaAction'

type Props = {
  className: string
}
interface tamaticaState {
  id: number
  tenaticaName: string
  tematicaColor: string
  servActivos: string
  buttonColor: string
}
const tematicas = [
  {
    id: 1,
    tenaticaName: 'Salud',
    tematicaColor: 'bg-success',
    servActivos: '1',
    buttonColor: 'badge-light-success',
  },
  {
    id: 2,
    tenaticaName: 'Violencia',
    tematicaColor: 'bg-danger',
    servActivos: '3',
    buttonColor: 'badge-light-danger',
  },
  {
    id: 3,
    tenaticaName: 'Educación',
    tematicaColor: 'bg-primary',
    servActivos: '1',
    buttonColor: 'badge-light-primary',
  },
  {
    id: 4,
    tenaticaName: 'Accesibilidad',
    tematicaColor: 'bg-warning',
    servActivos: '1',
    buttonColor: 'badge-light-warning',
  },
]
const selecccion: any = []

const TematicasCard: React.FC<Props> = ({className}) => {
  const dispatch = useDispatch()
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
        {tematicas.map((item) => (
          <div className='d-flex align-items-center mb-8' key={item.id}>
            {/* begin::Bullet */}
            <span className={`bullet bullet-vertical h-40px ${item.tematicaColor}`}></span>
            {/* end::Bullet */}
            {/* begin::Checkbox */}
            <div className='form-check form-check-custom form-check-solid mx-5'>
              <input
                className='form-check-input'
                type='checkbox'
                name='tematica'
                value={item.tenaticaName}
                onChange={() => handleChange(item)}
              />
            </div>
            {/* end::Checkbox */}
            {/* begin::Description */}
            <div className='flex-grow-1'>
              <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
                {item.tenaticaName}
              </a>
              <span className='text-muted fw-bold d-block'>{`Servicios Activos ${item.servActivos}`}</span>
            </div>
            {/* end::Description */}
            <span className={`badge ${item.buttonColor} fs-8 fw-bolder`}>Info</span>
          </div>
        ))}

        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TematicasCard}
