import React, { useState } from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const TextField = ({
  className,
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInput,
  ...props
}) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper className={className} disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

TextField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  initialValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  onBlur: PropTypes.func,
  onInput: PropTypes.func
}

TextField.defaultProps = {
  className: 'textfield',
  label: '',
  name: '',
  initialValue: '',
  error: '',
  disabled: false,
  onInput: () => {},
  onBlur: () => {}
}

export default TextField
