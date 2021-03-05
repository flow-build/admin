import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    align-items: center;
    box-shadow: inset 0px -1px 0px ${theme.colors.gray};
    color: ${theme.colors.black};
    display: flex;
    height: 70px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 ${theme.spacings.medium};
    width: 100%;
  `}
`

export const LogoWrapper = styled.div`
  a {
    text-decoration: none;
  }
`
export const ActionsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    a {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.bold};
      margin-left: ${theme.spacings.small};
      text-decoration: none;
    }
  `}
`
