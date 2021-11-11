import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {Provider} from 'react-redux'
import {Routes} from './routing/Routes'
import {store} from './modules/auth/redux/ReduxStore/Store'

type Props = {
  basename: string
}

const App: React.FC<Props> = ({basename}) => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <BrowserRouter basename={basename}>
        <I18nProvider>
          <LayoutProvider>
            <Provider store={store}>
              <Routes />
            </Provider>
          </LayoutProvider>
        </I18nProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export {App}
