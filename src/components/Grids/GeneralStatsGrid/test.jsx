import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import GeneralStatsGrid from './index'

describe('<GeneralStatsGrid />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GeneralStatsGrid />)

    expect(screen.getByRole('heading', { name: /GeneralStatsGrid/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<GeneralStatsGrid />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
