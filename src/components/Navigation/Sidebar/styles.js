import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-right: 1px solid ${theme.border.color};
    bottom: 0;
    height: 100vh;
    left: 0;
    max-width: var(--sidebar-width);
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: max-width ${theme.navigation.transition};
    width: 100%;
    z-index: 11;
  `}
`

export const NavItems = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 0 23px;
  width: 100%;
`
