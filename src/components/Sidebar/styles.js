import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    min-height: 640px;
    padding: ${theme.spacings.medium};
    width: 250px;
  `}
`
