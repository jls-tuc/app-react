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
              <div className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'>
                Seleccione una o varias tematicas para realizar la consulta.
              </div>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    {/* Cardsssss */}
                    <div className='d-flex align-items-center'>
                      <img className='card-img-top' src='...' alt='Card image cap' />
                      <div className='card-body'>
                        <h5 className='card-title'>Card title</h5>
                        <p className='card-text'>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </p>
                      </div>
                    </div>
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
