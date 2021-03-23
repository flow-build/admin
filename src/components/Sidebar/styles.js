import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: silver;
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    /* left: ${({ showSidebar }) => (showSidebar ? '0' : '-100%')}; */
    min-height: 640px;
    padding: ${theme.spacings.medium};
    /* transition: 600ms; */
    width: 250px;
    z-index: 10;
  `}
`
