import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import consultaWs from '../services/civis.service'
import {useState} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Dropdown1} from '../../../../../_metronic/partials/content/dropdown/Dropdown1'

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

function WebServicesActivos() {
  const [loading, setLoading] = useState(false)
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
    <div>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='me-7 mb-4'>
              <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                <img src={'/media/avatars/150-2.jpg'} alt='Metornic' />
                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
              </div>
            </div>

            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center mb-2'>
                    <div className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                      Civis
                    </div>
                  </div>

                  <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                    <div className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                      Registro unico del ciudadano.
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'></div>
              <div className='card-header border-0'>
                <h3 className='card-title fw-bolder text-dark'>
                  Seleccione una o varias tematicas.
                </h3>
                <div className='card-toolbar'>
                  {/* begin::Menu */}
                  <button
                    type='button'
                    className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
                  </button>
                  <Dropdown1 />
                  {/* end::Menu */}
                </div>
              </div>
              <div className='d-flex flex-column flex-grow-1 pe-8 align-items-center'>
                <div className='d-flex flex-wrap'>
                  {/* Cardsssss */}
                  <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
                    {/* begin::Icon */}
                    <span className='svg-icon svg-icon-warning me-5'>
                      <KTSVG
                        path='/media/icons/duotune/abstract/abs027.svg'
                        className='svg-icon-1'
                      />
                    </span>
                    {/* end::Icon */}
                    {/* begin::Title */}
                    <div className='flex-grow-1 me-2'>
                      <a href='#' className='fw-bolder text-gray-800 text-hover-primary fs-6'>
                        Violencias
                      </a>
                      <span className='text-muted fw-bold d-block'>Servicios activos</span>
                    </div>
                    {/* end::Title */}
                    {/* begin::Lable */}
                    <span className='fw-bolder text-success py-1'>+5</span>
                    {/* end::Lable */}
                  </div>

                  <div className='d-flex align-items-center bg-light-success rounded p-5 mb-7'>
                    {/* begin::Icon */}
                    <span className='svg-icon svg-icon-warning me-5'>
                      <KTSVG
                        path='/media/icons/duotune/abstract/abs027.svg'
                        className='svg-icon-1'
                      />
                    </span>
                    {/* end::Icon */}
                    {/* begin::Title */}
                    <div className='flex-grow-1 me-2'>
                      <a href='#' className='fw-bolder text-gray-800 text-hover-primary fs-6'>
                        Salud
                      </a>
                      <span className='text-muted fw-bold d-block'>Servicios activos</span>
                    </div>
                    {/* end::Title */}
                    {/* begin::Lable */}
                    <span className='fw-bolder text-success py-1'>+10</span>
                    {/* end::Lable */}
                  </div>
                </div>
              </div>
              <div className='d-flex flex-wrap flex-stack'></div>
              <div className='d-flex flex-wrap flex-stack'>
                {/*  <form onSubmit={formik.handleSubmit} noValidate>
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
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebServicesActivos
