import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    flex: 1;
    height: 500px;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
