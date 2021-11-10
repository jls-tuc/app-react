import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {Provider} from 'react-redux'
import {Routes} from './routing/Routes'
import {store} from './store/store'

type Props = {
  basename: string
}

const App: React.FC<Props> = ({basename}) => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <BrowserRouter basename={basename}>
        <I18nProvider>
          <Provider store={store}>
            <LayoutProvider>
              <Routes />
            </LayoutProvider>
          </Provider>
        </I18nProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export {App}
