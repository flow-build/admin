import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import NavigationItems from './index'

describe('<NavigationItems />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NavigationItems />)

    expect(screen.getByRole('heading', { name: /NavigationItems/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<NavigationItems />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
