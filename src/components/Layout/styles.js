import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    margin: 0px auto;
  `}
`
