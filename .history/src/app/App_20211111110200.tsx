import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {Provider} from 'react-redux'
import {Routes} from './routing/Routes'
import {store, perStore} from '../setup/redux/ReduxStore/Store'
import {PersistGate} from 'redux-persist/integration/react'

type Props = {
  basename: string
}

const App: React.FC<Props> = ({basename}) => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Provider store={store}>
        <BrowserRouter basename={basename}>
          <I18nProvider>
            <LayoutProvider>
              <PersistGate persistor={perStore}>
                <Routes />
              </PersistGate>
            </LayoutProvider>
          </I18nProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}

export {App}
