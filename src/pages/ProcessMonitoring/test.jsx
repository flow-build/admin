import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import ProcessMonitoring from './index'

describe('<ProcessMonitoring />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProcessMonitoring />)

    expect(screen.getByRole('heading', { name: /ProcessMonitoring/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<ProcessMonitoring />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
