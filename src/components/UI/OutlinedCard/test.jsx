import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import MaterialCard from './index'

describe('<MaterialCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<MaterialCard />)

    expect(screen.getByRole('heading', { name: /MaterialCard/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<MaterialCard />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
