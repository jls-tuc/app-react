import React from 'react'

type Props = {
  className: string
}

const TematicasCard: React.FC<Props> = ({className}) => {
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
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-success'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Salud
            </a>
            <span className='text-muted fw-bold d-block'>Servicios activos 3</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-success fs-8 fw-bolder'>Info</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-success'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Salud
            </a>
            <span className='text-muted fw-bold d-block'>Servicios activos 3</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-success fs-8 fw-bolder'>Info</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-success'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Salud
            </a>
            <span className='text-muted fw-bold d-block'>Servicios activos 3</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-success fs-8 fw-bolder'>Info</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-success'></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className='form-check form-check-custom form-check-solid mx-5'>
            <input className='form-check-input' type='checkbox' value='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Salud
            </a>
            <span className='text-muted fw-bold d-block'>Servicios activos 3</span>
          </div>
          {/* end::Description */}
          <span className='badge badge-light-success fs-8 fw-bolder'>Info</span>
        </div>
        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TematicasCard}
