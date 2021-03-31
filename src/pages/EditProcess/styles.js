import * as PS from 'assets/styles/pages'
import styled, { css } from 'styled-components'

export const Container = styled(PS.PageContainer)``

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
