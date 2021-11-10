/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {FC} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'

import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {Logout, AuthPage} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {MasterInit} from '../../_metronic/layout/MasterInit'
import {shallowEqual, useSelector} from 'react-redux'

const Routes: FC = () => {
  const isAuthorized = useSelector<any>(({auth}) => auth.token, shallowEqual)
  console.log(isAuthorized)
  return (
    <>
      <Switch>
        {!isAuthorized ? (
          /*Redirect to `/auth` when user is not authorized*/
          <Redirect to='/auth/login' />
        ) : (
          <MasterLayout>
            <PrivateRoutes />
          </MasterLayout>
        )}
      </Switch>
      <MasterInit />
    </>
  )
}

export {Routes}
