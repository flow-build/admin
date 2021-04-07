import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 0 15px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999;

  @media screen and (max-width: 586px) {
    padding: 0;
    height: 100vh;
  }
`

export const ContentOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ContentClosingAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(100%);
  }
`

export const Content = styled.div`
  z-index: 99999;
  margin: auto;
  padding: 15px;
  position: relative;
  border-radius: 6px;
  background-color: transparent;
  animation: ${({ isOpen }) =>
    isOpen ? ContentOpenAnimation : ContentClosingAnimation}
    0.5s ease-in-out;

  width: ${({ size }) => {
    switch (size) {
      case 'lg':
        return '800px'
      case 'md':
        return '600px'
      case 'sm':
        return '400px'

      default:
        return 'auto'
    }
  }};


  @media (min-width: 480px) {
    max-width: 728px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}
  `

export const CloseButton = styled.button`
  background: #f7f9fc;
  border: 2px solid #8f9bb3;
  border-radius: 1000px;
  cursor: pointer;
  height: 38px;
  margin: 0 5px 0 30px;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 38px;
  z-index: 999999;
`

export const CloseIcon = styled.i`
  color: #2e3a59;
  font-size: 24px;
  font-weight: 300p;
`

export const Background = styled.div`
  align-items: center;
  background-color: rgb(128 128 128 / 92%);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`
