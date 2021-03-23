import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-content: center;
    align-items: center;
    background: ${theme.colors.gray};
    color: ${theme.colors.black};
    flex: 1;
    height: 500px;
    justify-content: center;
    margin-left: 5px;
    max-width: 250px;
  `}
`
