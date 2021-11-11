/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutDashboard} from '../../../../setup/redux/ReduxActions/DashActions'

const HeaderUserMenu: FC = () => {
  const user: any = ''
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logoutDashboard())
    sessionStorage.removeItem('token')
  }

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={user.pic} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {user.firstname} {user.lastname}
              <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>Pro</span>
            </div>
            <a href='#' className='fw-bold text-muted text-hover-primary fs-7'>
              {user.email}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          Perfil de usuario
        </Link>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5'>
          Salir
        </a>
      </div>
    </div>
  )
}

export { HeaderUserMenu }
