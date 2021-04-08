import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import CardP from './index'

describe('<CardP />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardP />)

    expect(screen.getByRole('heading', { name: /CardP/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<CardP />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
