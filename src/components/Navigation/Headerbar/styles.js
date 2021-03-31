import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.border.color};
    display: flex;
    height: ${theme.navigation.headerbar.height};
    justify-content: flex-start;
    left: 0;
    padding: 0 0 0 calc(var(--sidebar-width) + 30px);
    position: fixed;
    right: 0;
    top: 0;
    transition: padding ${theme.navigation.transition};
    width: 100%;
    z-index: 10;
  `}
`

export const Toggle = styled.div`
  cursor: pointer;
  font-size: 22px;
`

export const NavItems = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
