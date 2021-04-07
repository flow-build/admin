import styled, { css } from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const Name = styled.div``

export const Icon = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0 0 0 15px;
`

export const Dropdown = styled.div`
  ${({ isVisible }) => css`
    display: ${isVisible ? 'flex' : 'none'};
    height: 500px;
    left: 0;
    position: absolute;
    top: 0;
    width: 500px;
    z-index: 10;
  `}
`
