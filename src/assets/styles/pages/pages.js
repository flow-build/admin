import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.page.backgroundColor};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    padding: var(--headerbar-height) 0 0 var(--sidebar-width);
    transition: padding ${theme.navigation.transition};
    width: 100%;
  `}
`

export const PageTitle = styled.h1``
