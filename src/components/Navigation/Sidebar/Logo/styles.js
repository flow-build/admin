import styled, { css } from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Image = styled.svg`
  height: 34px;
  width: 34px;
`

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.bold};
    margin-left: ${theme.spacings.xxsmall};
  `}
`
