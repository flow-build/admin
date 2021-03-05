import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import Button from './index'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Sign In</Button>)

    expect(screen.getByRole('button', { name: /Sign In/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Sign In</Button>)

    expect(screen.getByRole('button', { name: /Sign In/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
})
