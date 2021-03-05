import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styles'

const Spinner = ({ className, ...props }) => (
  <S.Wrapper className={className} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle
        fill="none"
        stroke="#0062ff"
        strokeWidth="4"
        cx="50"
        cy="50"
        r="44"
        opacity=".5"
      />
      <circle
        fill="#82c43c"
        stroke="#82c43c"
        strokeWidth="3"
        cx="8"
        cy="54"
        r="6"
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 48"
          to="360 50 52"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </S.Wrapper>
)

Spinner.propTypes = {
  className: PropTypes.string
}

Spinner.defaultProps = {
  className: 'spinner'
}

export default Spinner
