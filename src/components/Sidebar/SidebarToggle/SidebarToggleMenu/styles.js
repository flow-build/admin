import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #15171c;
    color: ${theme.colors.black};
    height: calc(100vh - 70px);
  `}
`
