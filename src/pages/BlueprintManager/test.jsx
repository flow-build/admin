import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import BlueprintManager from './index'

describe('<BlueprintManager />', () => {
  it('should render the heading', () => {
    renderWithTheme(<BlueprintManager />)

    expect(screen.getByRole('heading', { name: /BlueprintManager/i })).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<BlueprintManager />)

    expect(container.firstChild).toHaveStyle({ color: '#222222' })
  })
})
