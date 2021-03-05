/* eslint-disable react/prop-types */
import React from 'react'

import theme from 'assets/styles/theme'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

export const renderWithTheme = (children) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
