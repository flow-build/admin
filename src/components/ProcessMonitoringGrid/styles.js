import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    flex: 4;
    height: 500px;
  `}
`
