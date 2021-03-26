import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.navigation.sidebar.icons.color};
    cursor: pointer;
    display: flex;
    height: 60px;
    justify-content: flex-start;
    padding: 0 0 0 9px;
    width: 100%;

    &:hover {
      color: ${theme.colors.primary.light};
    }
  `}
`

export const Icon = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  justify-content: center;
`

export const Title = styled.h5`
  font-size: 14px;
  padding: 0 0 0 30px;
  text-align: left;
  white-space: nowrap;
`
