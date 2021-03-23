import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.black};
    display: block;
    height: 100%
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  `}
`
