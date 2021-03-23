import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import SidebarData from './index'

describe('<SidebarData />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SidebarData />)

    expect(screen.getByRole('heading', { name: /SidebarData/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<SidebarData />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
