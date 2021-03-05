import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.black};
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    width: 100%;

    svg {
      height: 10rem;
      pointer-events: none;
    }
  `}
`
