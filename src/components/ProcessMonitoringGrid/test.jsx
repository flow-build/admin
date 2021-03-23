import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import ProcessMonitoringGrid from './index'

describe('<ProcessMonitoringGrid />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProcessMonitoringGrid />)

    expect(screen.getByRole('heading', { name: /ProcessMonitoringGrid/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<ProcessMonitoringGrid />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
