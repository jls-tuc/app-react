import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import AgendaPage from './components/AgendaPage'

function AgendaRoute() {
  const { url } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={`${url}/agenda`} component={AgendaPage} />
      <Route path='*'>
        <Redirect to='/page404' />
      </Route>
    </Switch>
  )
}

export default AgendaRoute
