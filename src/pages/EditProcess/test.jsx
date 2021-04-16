import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import EditProcess from './index'

describe('<EditProcess />', () => {
  it('should render the heading', () => {
    renderWithTheme(<EditProcess />)

    expect(screen.getByRole('heading', { name: /EditProcess/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<EditProcess />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
