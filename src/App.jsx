import React from 'react'
import Notifications from 'react-notifications-component'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from 'assets/styles/globalStyles'
import theme from 'assets/styles/theme'
import * as C from 'components'
import Providers from 'contexts/Providers'
import Routes from 'routes'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Providers>
          <GlobalStyles />
          <Notifications />

          <C.Navigation />
          <Routes />
        </Providers>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
