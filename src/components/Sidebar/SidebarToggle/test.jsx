import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import SidebarToggle from './index'

describe('<SidebarToggle />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SidebarToggle />)

    expect(screen.getByRole('heading', { name: /SidebarToggle/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<SidebarToggle />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
