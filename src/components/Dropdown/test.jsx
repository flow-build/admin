import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import Dropdown from './index'

describe('<Dropdown />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Dropdown />)

    expect(screen.getByRole('heading', { name: /Dropdown/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Dropdown />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
