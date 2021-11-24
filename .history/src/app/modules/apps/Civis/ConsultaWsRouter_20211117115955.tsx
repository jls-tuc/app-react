import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom'

import ConsutlasPage from './pages/ConsutlasPage'

function CivisRouter() {
  const {url} = useRouteMatch() // el hook  tiene el historial de las rutas previas  '/dashboard/webservice'

  return (
    <Switch>
      <Route exact path={`${url}/servicios`} component={ConsutlasPage} />
      <Route path='*'>
        <Redirect to='/page404' />
      </Route>
    </Switch>
  )
}

export default CivisRouter
