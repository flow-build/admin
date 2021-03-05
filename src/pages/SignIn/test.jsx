import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import SignIn from './index'

describe('<SignIn />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SignIn />)

    expect(screen.getByRole('heading', { name: /SignIn/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<SignIn />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
