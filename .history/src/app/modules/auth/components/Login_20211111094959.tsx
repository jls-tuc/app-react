/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import {login} from '../Services/AuthCRUD'
import * as Yup from 'yup'
import clsx from 'clsx'
import jwt_decode from 'jwt-decode'
import {loginAction} from '../redux/ReduxActions/AuthActions'
import {usrAction} from '../models/AuthModel'
import {getOrg} from '../../../../_metronic/services/DashBoardServices'
import {DashAction} from '../redux/ReduxActions/DashActions'

const loginSchema = Yup.object().shape({
  usuario: Yup.string()
    .min(8, 'Minimo 8 caracteres')
    .max(8, 'Maximo 8 caracteres')
    .required('Usuario es requirido'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  usuario: '',
  password: '',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        login(values.usuario, values.password)
          .then((res: any) => {
            setLoading(false)
            const {foto, token} = res.data
            sessionStorage.setItem('token', token)
            const usData: usrAction = jwt_decode(token)
            dispatch(loginAction(token, foto, usData))
            getOrg().then((resp: any) => {
              const {modulos, nombre, perfil, permisos} = resp.data[0].dependencias[0]
              const isLogged: boolean = true
              dispatch(DashAction(modulos, nombre, perfil, permisos, isLogged))
            })
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Iniciar Sesión</h1>
      </div>
      {/* begin::Heading */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Usuario</label>
        <input
          placeholder='Usuario'
          {...formik.getFieldProps('usuario')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.usuario && formik.errors.usuario},
            {
              'is-valid': formik.touched.usuario && !formik.errors.usuario,
            }
          )}
          type='text'
          name='usuario'
          autoComplete='off'
        />
        {formik.touched.usuario && formik.errors.usuario && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.usuario}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            {/* begin::Label */}
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
            {/* end::Label */}
            {/* begin::Link */}
            {/*  <Link
              to='/auth/forgot-password'
              className='link-primary fs-6 fw-bolder'
              style={{marginLeft: '5px'}}
            >
              Forgot Password ?
            </Link> */}
            {/* end::Link */}
          </div>
        </div>
        <input
          type='password'
          placeholder='Password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continuar</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

        {/* begin::Separator */}
        {/*  <div className='text-center text-muted text-uppercase fw-bolder mb-5'>or</div> */}
        {/* end::Separator */}

        {/* begin::Google link */}
        {/*  <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
            className='h-20px me-3'
          />
          Continue with Google
        </a> */}
        {/* end::Google link */}

        {/* begin::Google link */}
        {/*  <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
            className='h-20px me-3'
          />
          Continue with Facebook
        </a> */}
        {/* end::Google link */}

        {/* begin::Google link */}
        {/* <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
            className='h-20px me-3'
          />
          Continue with Apple
        </a> */}
        {/* end::Google link */}
      </div>
      {/* end::Action */}
    </form>
  )
}
