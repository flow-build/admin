import * as PS from 'assets/styles/pages'
import styled, { css } from 'styled-components'

export const Container = styled(PS.PageContainer)``

export const Card = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    margin-top: 80px;
  `}
`
