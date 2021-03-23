import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import NavigationItem from './index'

describe('<NavigationItem />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NavigationItem />)

    expect(screen.getByRole('heading', { name: /NavigationItem/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<NavigationItem />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
