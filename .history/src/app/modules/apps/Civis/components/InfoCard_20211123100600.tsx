import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useFormik} from 'formik'
import {ISTATE} from '../../../../../setup/redux/interface/reduxState.interface'
import * as Yup from 'yup'
import clsx from 'clsx'
import consultaWs from '../services/civis.service'

type Props = {
  className: string
  /* tematica: boolean
  infoTematica: {} */
}
const civisSchema = Yup.object().shape({
  dni: Yup.string()
    .min(8, 'Minino 8 caracteres')
    .max(8, 'Minino 8 caracteres')
    .required('El número de documento es requerido'),
  sexo: Yup.string(),
  usuario: Yup.string(),
})
const initialValues = {
  dni: '',
  sexo: 'M',
  usuario: '12345678',
}

let selectTematicas: boolean = false

const InfoCard: React.FC<Props> = ({className}) => {
  const [loading, setLoading] = useState(false)
  const [tematiaStore, setTematicaStore] = useState([])

  useEffect(() => {
    let dataStore: any = useSelector((state: ISTATE) => state.temtaticas)
    setTematicaStore()
  }, [tematiaStore])

  const formik = useFormik({
    initialValues,
    validationSchema: civisSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      consultaWs(values)
        .then((res: any) => {
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
          setSubmitting(false)
          setStatus('Se produjo un error')
        })
    },
  })

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>Info</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}

      <div className='card-body pt-2'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={'/media/avatars/150-1.jpg'} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}
          <div className='flex-grow-1'>
            <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
              Emma Smith
            </a>
            <span className='text-muted d-block fw-bold'>Project Manager</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}

      {/* Busqueda */}
      {selectTematicas! ? (
        <div className='card-body pt-2'>
          <form onSubmit={formik.handleSubmit} noValidate>
            <label className='form-label fs-6 fw-bolder text-dark'>Documento</label>
            <input
              placeholder='Documento'
              {...formik.getFieldProps('dni')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {'is-invalid': formik.touched.dni && formik.errors.dni},
                {
                  'is-valid': formik.touched.dni && !formik.errors.dni,
                }
              )}
              name='dni'
              type='text'
              autoComplete='off'
            />
            {formik.touched.dni && formik.errors.dni && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.dni}</span>
              </div>
            )}
            <br />
            <button
              type='submit'
              id='kt_sign_in_submit'
              className='btn btn-lg btn-secondary w-100 mb-5 text-white'
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {!loading && <span className='indicator-label'>Buscar</span>}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Por favor espere...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export {InfoCard}
