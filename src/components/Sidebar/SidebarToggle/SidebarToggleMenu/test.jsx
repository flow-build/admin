import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import SidebarToggleMenu from './index'

describe('<SidebarToggleMenu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SidebarToggleMenu />)

    expect(screen.getByRole('heading', { name: /SidebarToggleMenu/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<SidebarToggleMenu />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
