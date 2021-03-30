import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  ${({ theme, isVisible }) => css`
    border: 1px solid #cccccc;
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

export const ContentAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Content = styled.p`
  ${() => css`
    animation: ${ContentAnimation} 1s ease-in forwards;
    background: #fff;
    height: 100%;
    overflow-y: auto;
    padding: 15px;
    white-space: pre-line;
    width: 100%;
  `}
`
