import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import Viewer from './index'

describe('<Viewer />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Viewer />)

    expect(screen.getByRole('heading', { name: /Viewer/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Viewer />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
