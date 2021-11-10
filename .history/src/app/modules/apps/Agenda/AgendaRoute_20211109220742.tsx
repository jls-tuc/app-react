import {Switch, Route, useRouteMatch, Redirect} from 'react-router-dom'
import Agenda from './components/Agenda'

function AgendaRoute() {
  const {url} = useRouteMatch()
  return (
    <Switch>
      <Route exact path={`${url}/agenda0`} component={Agenda} />
      <Route path='*'>
        <Redirect to='/page404' />
      </Route>
    </Switch>
  )
}

export default AgendaRoute
