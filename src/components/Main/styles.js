import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    min-width: 250px;
    padding: ${theme.spacings.medium};
    width: 100%;
  `}
`
