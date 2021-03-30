import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme, isVisible }) => css`
    background: #fff;
    border: 1px solid #cccccc;
    border-left: none;
    color: ${theme.colors.black};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    max-width: ${isVisible ? '500px' : '0'};
    overflow: hidden;
    transition: max-width 400ms ease;
    width: 100%;

    @media screen and (max-width: 1200px) {
      max-width: 100%;
    }
  `}
`
