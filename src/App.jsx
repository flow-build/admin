import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from 'assets/styles/globalStyles'
import theme from 'assets/styles/theme'
import { AuthProvider } from 'contexts/AuthContext'
import Routes from 'routes'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
