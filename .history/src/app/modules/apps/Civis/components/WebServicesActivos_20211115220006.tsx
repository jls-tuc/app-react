import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import consultaWs from '../services/civis.service'
import {useState} from 'react'

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
              <div className='separator mb-4'></div>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    {/* Cardsssss */}
                    <div className='d-flex align-items-center'>
                      <span className='svg-icon svg-icon-3 svg-icon-success me-2'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='mh-50px'
                        >
                          <rect
                            opacity='0.5'
                            x='13'
                            y='6'
                            width='13'
                            height='2'
                            rx='1'
                            transform='rotate(90 13 6)'
                            fill='black'
                          ></rect>
                          <path
                            d='M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z'
                            fill='black'
                          ></path>
                        </svg>
                      </span>
                      <div className='fs-2 fw-bolder'>4500$</div>
                    </div>
                    <div className='fw-bold fs-6 text-gray-400'>Earnings</div>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-wrap flex-stack'></div>
              <div className='d-flex flex-wrap flex-stack'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebServicesActivos
