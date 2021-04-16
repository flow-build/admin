import React from 'react'

import chevron from 'assets/images/chevronDownBlack.png'
import PropTypes from 'prop-types'

import * as S from './styles'

const Dropdown = ({ className, label, options, ...props }) => {
  return (
    <S.Wrapper className={className} {...props}>
      {label && <S.Label>{label}</S.Label>}

      <S.DropdownContent>
        <S.Select>
          <S.DropdownOption value="">Selecione o(s) tipo(s)</S.DropdownOption>
          {options &&
            options.map((option, index) => (
              <S.DropdownOption key={index} value={option.value}>
                {option.text}
              </S.DropdownOption>
            ))}
        </S.Select>
        <S.DropdownIcon src={chevron} alt="Chevron" />
      </S.DropdownContent>
    </S.Wrapper>
  )
}

Dropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
}

Dropdown.defaultProps = {
  className: 'dropdown',
}

export default Dropdown
