import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  overflow-y: auto;
  padding: 15px;
`

export const ContentAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`
export const Pre = styled.pre`
  animation: ${ContentAnimation} 1s ease-in forwards;
`

export const Text = styled.p`
  font-size: 14px;

  & > span {
    color: tomato;
  }
`
