import { Switch, Route, useRouteMatch } from 'react-router-dom'

import { HomePage } from './pages';

function PhonesRoute() {
  const { url } = useRouteMatch()
  return (
      <Switch>
        <Route path={`${url}/`} component={HomePage} />
      </Switch>
  )
}

export default PhonesRoute;