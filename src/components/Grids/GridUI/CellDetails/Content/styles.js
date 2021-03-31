import styled, { keyframes } from 'styled-components'
import {
  SEARCHED_ID,
  SEARCHED_ON_FOCUS_CLASS,
} from 'utils/components/cellDetails/cellDetails'

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

  & #${SEARCHED_ID} {
    color: #2200a5;
  }

  & .${SEARCHED_ON_FOCUS_CLASS} {
    background: #cecece;
    color: #333 !important;
  }
`
