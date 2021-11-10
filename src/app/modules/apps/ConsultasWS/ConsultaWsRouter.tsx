import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'

import ConsultaWs from './components/ConsultaWs'
import WebServicesActivos from './components/WebServicesActivos'

function ConsultaWsRouter() {
	const { url } = useRouteMatch() // el hook  tiene el historial de las rutas previas  '/dashboard/webservice'

	return (
		<Switch>
			<Route exact path={`${url}/servicios`} component={WebServicesActivos} />
			<Route exact path={`${url}/consulta`} component={ConsultaWs} />
			<Route path='*'>
				<Redirect to='/page404' />
			</Route>
		</Switch>
	)
}

export default ConsultaWsRouter

