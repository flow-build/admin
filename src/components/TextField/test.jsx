import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import { screen } from '@testing-library/react'

import TextField from './index'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })
})
