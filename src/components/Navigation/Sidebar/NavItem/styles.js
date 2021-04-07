import styled, { css } from 'styled-components'

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  width: 100%;
`

export const LinkContent = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.navigation.sidebar.icons.color.base};
    cursor: pointer;
    display: flex;
    height: 100%;
    height: 60px;
    justify-content: flex-start;
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
