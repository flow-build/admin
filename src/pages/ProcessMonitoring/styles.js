import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    flex-direction: row;
  `}
`
