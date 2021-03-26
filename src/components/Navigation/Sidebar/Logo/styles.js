import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme, isSidebarExpanded }) => css`
    align-items: center;
    border-bottom: ${isSidebarExpanded
      ? `1px solid ${theme.border.color}`
      : 'none'};
    display: flex;
    height: var(--headerbar-height);
    justify-content: flex-start;
    padding: 0 0 0 23px;
    width: 100%;
  `}
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
    padding: 0 0 0 20px;
  `}
`
