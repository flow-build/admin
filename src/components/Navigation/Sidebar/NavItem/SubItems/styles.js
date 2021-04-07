import styled, { css } from 'styled-components'

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0 55px;
  transition: all 700ms ease;
  width: 100%;
`

export const SubItem = styled.span`
  ${({ theme }) => css`
    color: ${theme.navigation.sidebar.icons.color.dark};
    margin: 0 0 5px;
    padding: 5px;
    white-space: nowrap;

    &:hover {
      color: ${theme.colors.primary.light};
    }
  `}
`
