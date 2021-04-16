import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import GeneralStats from './index'

describe('<GeneralStats />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GeneralStats />)

    expect(screen.getByRole('heading', { name: /GeneralStats/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<GeneralStats />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
